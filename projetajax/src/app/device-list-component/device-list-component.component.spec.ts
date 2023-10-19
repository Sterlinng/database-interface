import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceListComponentComponent } from './device-list-component.component';

describe('DeviceListComponentComponent', () => {
  let component: DeviceListComponentComponent;
  let fixture: ComponentFixture<DeviceListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceListComponentComponent]
    });
    fixture = TestBed.createComponent(DeviceListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
