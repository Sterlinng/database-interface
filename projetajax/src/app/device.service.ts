import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private apiUrl = 'http://127.0.0.1:8000/api/devices';

  constructor(private http: HttpClient) {}

  // Méthode pour ajouter un dispositif
  addDevice(deviceData: any) {
    return this.http.post(`${this.apiUrl}`, deviceData);
  }

  // Ajoutez d'autres méthodes pour récupérer, supprimer, mettre à jour, etc.
}
