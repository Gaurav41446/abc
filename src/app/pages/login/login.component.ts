import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/userservice.service';
import { Router } from '@angular/router';
import { AdminserviceService } from '../../services/adminservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: any;
  public user = {
    email: '',
    password: '',
  };
  isUserLogin=true
  constructor(
    private userService: UserServiceService,
    private adminService: AdminserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    
    this.userService.loginUser(this.user).subscribe(
      (data: any) => {
        if (data.role === 'user') {
          alert('User Logged In');
          // Pass user data to the UserdashboardComponent
          // this.router.navigate(['/userDashboard', { userData: JSON.stringify(data) }]);
          this.router.navigate(['/userDashboard'], {state:{userData:data}});
        } 
        else {
          alert('Invalid role');
        }
      },
      // error => {
      //   console.error('Error:', error);
      //   alert('user error');
      // }
    );

    
      this.adminService.loginadmin(this.user).subscribe(
        (data: any) => {
          if (this.isUserLogin) { // Checking if the role is admin
            alert('Admin Logged In');
            // Pass admin data to the AdminDashboardComponent
            // this.router.navigate(['/admindashboard', { adminData: JSON.stringify(data) }]);
            this.router.navigate(['/admindashboard'],{state:{adminData:data}}) ;
            
          } 
          else {
            alert('Invalid role');

          }
        },
        error => {
          console.error('Error:', error);
          alert('Sorry, please enter correct email and password');
        }
      );
    }
    
    loginAdmin(){
      this.isUserLogin=false
    }
    loginUser(){
      this.isUserLogin=true
    }
  }

