import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inputVal: string;
  constructor(private $router: Router, private $snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(searchTxt: string) {
    if (searchTxt) {
      const reg1 = searchTxt.slice(0, -4);
      const reg2 = searchTxt.slice(-4);
      this.$router.navigate(['getVehicleDetails'], { queryParams: { reg1, reg2 } });
    } else {
      this.$snackBar.open('please enter a registration number ', 'ok');
    }
  }

}
