import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Router } from 'express';
import {Router} from '@angular/router'



@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  

userData: any;
  route: any;
constructor(private router: Router) {
  const navigation = this.router.getCurrentNavigation?.();
  if (navigation?.extras.state) {
    this.userData = navigation.extras.state['userData'];
  }
}

ngOnInit(): void {
 this.route.data.subscribe((data: { userData: any }) => {
    this.userData = data.userData;
    console.log(this.userData); //
  });
}


}
