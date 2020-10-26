import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../app-services/vehicle.service';
import { Vehicle } from '../vehicle.modal';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {

  vehicle: Vehicle;
  isLoading = false;
  hasError: string;
  constructor(private $activatedRoute: ActivatedRoute, private $vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.$activatedRoute.queryParams.subscribe(params => {
      this.getVehicleDetails(params);
    });
  }

  private getVehicleDetails(params) {
    this.isLoading = true;
    const { reg1, reg2 } = params;
    this.$vehicleService.getVehicleDetails(reg1, reg2).subscribe(data => {
      this.vehicle = data;
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
      this.hasError = JSON.stringify(err);
    });
  }

  goBack() {
    window.history.back();
  }

}
