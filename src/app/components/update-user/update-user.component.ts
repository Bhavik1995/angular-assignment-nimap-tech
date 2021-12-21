import { Component, OnInit, NgZone } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { Options } from '@angular-slider/ngx-slider';
import { countries } from '../store/country-data-store';
import { states } from '../store/state-data-store';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;
  public countries:any = countries

  public states: any = states

  value: number = 20;
  options: Options = {
    floor: 20,
    ceil: 60,
    showSelectionBar: true
  };


  constructor(public formBuilder: FormBuilder, private router: Router, private ngZone: NgZone, private activatedRoute: ActivatedRoute, private crudDataService: ServiceService) { 

    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudDataService.getAllUsersData(this.getId).subscribe(res => {
      this.updateForm.patchValue({
        first_name: res['first_name'],
        last_name: res['last_name'],
        age: res['age'],
        email: res['email'],
        phone: res['phone'],
        state: res['state'],
        country: res['country'],
        newsletter: res['newsletter'],
        address: res['address'],
        images: res['images'],
      });
    });
  
    this.updateForm = this.formBuilder.group({
      first_name: [''],
      last_name: [''],
      age:[''],
      email:[''],
      phone:[''],
      state:[''],
      country:[''],
      newsletter:[''],
      address: [''],
      images:[''],
    })
  }


  ngOnInit() {
  }

  onUpdate(): any {
    this.crudDataService.updateUser(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/user-profile'))
      }, (err) => {
        console.log(err);
    });
    this.updateForm.reset();
  }
  get first_name(){
    return this.updateForm.get('first_name');
}

get last_name(){
  return this.updateForm.get('last_name');
}

get email(){
  return this.updateForm.get('email');
}

get phone(){
  return this.updateForm.get('phone');
}

get age(){
  return this.updateForm.get('age');
}

get state(){
  return this.updateForm.get('state');
}

get country(){
  return this.updateForm.get('country');
}

get newsletter(){
  return this.updateForm.get('newsletter');
}

get address(){
  return this.updateForm.get('address');
}

}
