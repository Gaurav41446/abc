import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AdminserviceService } from '../../services/adminservice.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  adminData: any;

  constructor(private router:Router,private route: ActivatedRoute,private adminService:AdminserviceService) {}

  ngOnInit(): void {
  
  }

  logoutAdmin() {
    // Clear navigation history
    const navigationExtras: NavigationExtras = {
      replaceUrl: true // Replace the current URL in the browser history
    };
    this.router.navigate(['login'], navigationExtras);
  }
}
