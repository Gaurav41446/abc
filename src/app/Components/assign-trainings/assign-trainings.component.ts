import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assign-trainings',
  templateUrl: './assign-trainings.component.html',
  styleUrl: './assign-trainings.component.css'
})
export class AssignTrainingsComponent {
  assignedTrainings: any[] = [];
  errorLoadingTrainings: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAssignedTrainings();
  }

  getAssignedTrainings(): void {
    this.http.get<any[]>('http://localhost:8080/users/allassigntrainingtouser')
      .subscribe(
        (data: any[]) => {
          console.log(data);
          this.assignedTrainings = data;
        },
        (error) => {
          console.error('Error fetching assigned trainings:', error);
          this.errorLoadingTrainings = true;
        }
      );
  }

}
