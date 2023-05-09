import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { country } from '../data/country';
import { CountryService } from '../service/country.service';
import { CityService } from '../service/city.service';
import { city } from '../data/city';

@Component({
  selector: 'app-newcountry',
  templateUrl: './newcountry.component.html',
  styleUrls: ['./newcountry.component.css']
})
export class NewcountryComponent implements OnInit {


  licountry!:country[]
  forms!:FormGroup
  forms2!:FormGroup

  constructor(private formBuilder:FormBuilder , private countryservice:CountryService ,private cityservice:CityService){}
  ngOnInit(): void {
    this.buildformcountry()
    this.buildformcity()
    
  }
  @ViewChild('txtsearchname') txtsearchname!:ElementRef;
  onsearch(){
    this.countryservice.search(this.txtsearchname.nativeElement.value).subscribe({
    next:data=>
    {
      
     this.licountry=data

    },
    error:err=>{
      alert("error")
    }


    })

  }

  buildformcountry(){
    this.forms=this.formBuilder.group({
      name: ['',Validators.required],
      code:['',Validators.required]
      
    })




}
onSavecountry(){
  var obj=new country();
  obj=this.forms.value;
  

this.countryservice.create(obj).subscribe({
  next:data=>{
    alert("save successfuly")
  },
  error:err=>{
    alert("error")
  }


})
}
buildformcity(){
  this.forms2=this.formBuilder.group({
    name: ['',Validators.required],
    country_id:['',Validators.required]
    
  })




}
onSavecity(){
var obj2=new city();
obj2=this.forms.value;


this.cityservice.create(obj2).subscribe({
next:data=>{
  alert("save successfuly")
},
error:err=>{
  alert("error")
}


})
}

}






