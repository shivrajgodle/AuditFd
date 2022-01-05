import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-my-pro',
  templateUrl: './my-pro.component.html',
  styleUrls: ['./my-pro.component.scss']
})
export class MyProComponent implements OnInit {

  projectForm!: FormGroup;
  projectForm1!: FormGroup;

  projectDialogue!:boolean;

  submitted?: boolean;

  errorMsg!: string;
  formLayout=false;

  constructor(private router: Router, private messageService: MessageService) {
    
    this.projectForm = new FormGroup({
      projectCode: new FormControl(''),
      taskCode: new FormControl(''),
    });

    this.projectForm1=new FormGroup({
      projectCode:new FormControl(),
      projectName:new FormControl(''),
      clientId:new FormControl(''),
      billingCode:new FormControl(''),
      annualYear:new FormControl(''),
      activationDate:new FormControl(''),
      deactivationDate:new FormControl(''),
      gracePeriod:new FormControl(''),
      activity:new FormControl('')
    });
  }

  ngOnInit(): void {}

  onSave() {
    console.log('inside project formgroup');
    console.log(this.projectForm.value);
    this.formLayout=true;
  }

  onProjectDataSave(){
    console.log("done...!!");
    
  }

  createAccount() {
    this.router.navigate(['#']);
  }


}
