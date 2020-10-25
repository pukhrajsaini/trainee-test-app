import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../vehicle.modal';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  api = 'http://18.212.242.209/getVehicleDetails';

  constructor(private $http: HttpClient) { }

  getVehicleDetails(reg1: string, reg2: string): Observable<Vehicle> {
    let params = new HttpParams();
    params = params.set('reg1', reg1);
    params = params.set('reg2', reg2);
    return this.$http.get<Vehicle>(this.api, { params });
  }
}
