import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCrudService } from '../services/user-crud.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  public formData: FormGroup;

  constructor(public formBuilder: FormBuilder, private zone: NgZone, private router: Router, private userCrudService: UserCrudService) {
    this.formData = this.formBuilder.group({
      name:[''],
      email:[''],
      password:['']
    });
  }

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.formData.value);
    if(!this.formData.valid){
      console.log("user not created");
      return false;
    } else{
      this.userCrudService.createUser(this.formData.value)
      .subscribe((response) => {
        this.zone.run(() => {
          console.log("user should be created and added");
          this.formData.reset();
          this.router.navigate(['/login']);
        });
      });

    }
  }
}
