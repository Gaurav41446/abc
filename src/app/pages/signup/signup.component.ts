// import { Component } from '@angular/core';
// import { UserServiceService } from '../../services/userservice.service';

// import { Router } from '@angular/router';



// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.css'
// })
// export class SignupComponent {
//   constructor(private userService:UserServiceService,
//     private router: Router
//     ) { }

//     ngOnInit(): void { }

//   public user = {
//     firstName: '',
//     lastName: '',
//     username: '',
//     email: '',
//     password: '',
//     role:'',
//     grade:''
//   }
//   onSubmit() {
//     console.log(this.user);
//     if (this.user.username=='' || this.user.username == null) {
//       alert("UserName Required!!!")
//       return;
//     }
//     if (this.user.firstName=='' || this.user.firstName == null) {
//       alert("FirstName Required!!!")
//       return;
//     }
//     if (this.user.lastName=='' || this.user.lastName == null) {
//       alert("LastName Required!!!")
//       return;
//     }
 


//   this.userService.addUser(this.user).subscribe(
//     (data)=>{
//       //success
//       console.log(data)
//       alert("User Successfully Registered!");
//       this.router.navigate(['/login']);
//     },
//     (error)=>{
//       //error
//       console.log(error)
//       alert("Something Went Wrong");
//     }
//   )

// }
// }








import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/userservice.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
 
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService,
    private router: Router
  ) { }
 
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],  
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      role: ['', Validators.required],
      grade: ['', Validators.required]
    });
  }
 
  onSubmit() {
    if (this.signupForm.invalid) {
      alert("Please fill in all required fields correctly!");
      return;
    }
 
    this.userService.addUser(this.signupForm.value).subscribe(
      (data) => {
        console.log(data);
        alert("User Successfully Registered!");
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
        alert("Something Went Wrong");
      }
    );
  }
}
 