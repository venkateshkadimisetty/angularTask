import { Component, OnInit } from '@angular/core';
import {CarService } from './car.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private carService:CarService) { }

  data:any[];
  types:String[]=[];
  subTypes:String[]=[];
  selectedType:String;
  selectedSubType:String="";
  imageUrl:String=""
  selectedModel:any={};
  onSelect(selectedTypeIp){
    this.subTypes=[];
    this.imageUrl="";
    this.data.forEach( (car) => {
      if(selectedTypeIp===car.carType){
        this.subTypes.push(car.carSubType);
      }
    });
  }
  onSelectSubtype(selectedSubTypeIp){
    this.data.forEach( (car) => {
      if(selectedSubTypeIp===car.carSubType){
        this.imageUrl=car.imageUrl;
        this.selectedModel=car;
      }
    });
  }
  ngOnInit() {
    this.carService.getAllBooks().subscribe((response:any) =>  {
    
    console.log(response);
      this.data=response;
      response.forEach( (car) => {
        let flag: boolean = true;
        this.types.forEach((sam)=>{
          if(sam===car.carType){
            flag=false;
          }
        });
        if(flag){
          this.types.push(car.carType);
        }
      });
    });
  }
}
