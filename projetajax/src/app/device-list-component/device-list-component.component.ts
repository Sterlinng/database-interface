import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-list-component',
  templateUrl: './device-list-component.component.html',
  styleUrls: ['./device-list-component.component.scss']
})

export class DeviceListComponentComponent implements OnInit {
  devices: any[] = [];
  databaseName: string = 'device_db'; // ENTREZ VOTRE BASE DE DONNEES ICI
  newDeviceName: string = ''; // Variable pour le nouveau nom de dispositif

  constructor(private http: HttpClient, private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.fetchDevices();
  }

  toggleDetails(device: any): void {
    device.showDetails = !device.showDetails;
  }

  // Méthode pour récupérer les appareils en fonction du nom de la base de données
  fetchDevices(): void {
    const apiUrl = `http://127.0.0.1:8000/api/devices`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.devices = data;
    });
  }

  // Méthode appelée lorsqu'une nouvelle base de données est sélectionnée
  onDatabaseChange(newDatabase: string): void {
    this.databaseName = newDatabase;
    this.fetchDevices();
  }

  // Méthode pour ajouter un dispositif
  addDevice(): void {
    // Vérifiez que le nom du dispositif n'est pas vide
    if (this.newDeviceName.trim() === '') {
      return;
    }

    // Appelez le service pour ajouter le dispositif
    this.deviceService.addDevice({ name: this.newDeviceName }).subscribe((response: any) => {
      // Réinitialisez le nom du nouveau dispositif et mettez à jour la liste des dispositifs
      this.newDeviceName = '';
      this.fetchDevices();
    });
  }
}
