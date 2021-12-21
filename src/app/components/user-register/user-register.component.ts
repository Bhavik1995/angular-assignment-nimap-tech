import { Component, OnInit, NgZone } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { countries } from '../store/country-data-store';
import { states } from '../store/state-data-store';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  userForm: FormGroup
  hideElement: boolean = true;
  
  images;
  public countries:any = countries

  public states: any = states

  // private selectOption: string;

  //    selectOptions = [
  //      {name:"Home", value: 1},
  //      {name:"Company", value: 2}
  //    ]

  value: number = 20;
  options: Options = {
    floor: 20,
    ceil: 60,
    showSelectionBar: true
  };

  public imagePath;
  imgURL: any;
  public message: string;

  constructor(public formBuilder: FormBuilder, private router: Router, private ngZone: NgZone, private userCrudService: ServiceService) {
    { 

      this.userForm = this.formBuilder.group({
          first_name: [''],
          last_name: [''],
          age:[''],
          email:[''],
          gender:[''],
          phone:[''],
          state:[''],
          country:[''],
          newsletter:[''],
          address: [''],
          images:[''],
      })
   }
   }

  ngOnInit() {
  }

  url="../../../assets/women image.png";

  onSelectFile(e){
      if(e.target.files){
          var reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          reader.onload = (event:any) =>{
            this.url = event
          }
      }
  }



  onSubmit(): any {

    // const formData = new FormData();
    // formData.append('file',this.images)
    this.userCrudService.AddUser(this.userForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/user-profile'))
      }, (err) => {
        console.log(err);
    });
    this.userForm.reset();
  }

get first_name(){
    return this.userForm.get('first_name');
}

get last_name(){
  return this.userForm.get('last_name');
}

get email(){
  return this.userForm.get('email');
}

get phone(){
  return this.userForm.get('phone');
}

get age(){
  return this.userForm.get('age');
}

get state(){
  return this.userForm.get('state');
}

get country(){
  return this.userForm.get('country');
}

get newsletter(){
  return this.userForm.get('newsletter');
}

get address(){
  return this.userForm.get('address');
}


}
