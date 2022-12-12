import { Component } from '@angular/core';
import { ElectricPowerDataService } from '../electric-power-data.service';

@Component({
  selector: 'app-elec-dashboard',
  templateUrl: './elec-dashboard.component.html',
  styleUrls: ['./elec-dashboard.component.css']
})
export class ElecDashboardComponent {
  constructor(private electricDataService: ElectricPowerDataService){}

  public testFunc(){
    this.electricDataService.testFunc()
  }
}
