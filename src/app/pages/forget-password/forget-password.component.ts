import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/userservice.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private userService: UserServiceService,
    private router: Router) { }

    public resetPassword = {
      email: '',
      password: '',
    }

  ngOnInit(): void {
  }

  formSubmit() {
    console.log(this.resetPassword);
    this.userService.resetPassword(this.resetPassword).subscribe(
      (data) => {
        // Success
        console.log(data);
        alert("Password Reseted");
        this.router.navigate(['/login']);
      },
      (error) => {
        // Error
        console.log(error);
        if (error.status === 200) {
          // Assuming successful save response status is 200
          alert("Password Reseted");
          this.router.navigate(['/login']);
        } else {
          // Other error handling
          alert("Something went wrong. Please try again later.");
        }
      }
    );
  }
}
