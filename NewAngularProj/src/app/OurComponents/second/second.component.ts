import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
img=1;
Srcimage="assets/img/"+this.img+".jpg";
images=[1,2,3,4,5,6];
nextImg(){
 
 if(this.img==6){
  this.Srcimage="assets/img/"+this.img+".jpg";
 }else{
  this.img++;
  this.Srcimage="assets/img/"+this.img+".jpg";
 }
}
prevImg(){
  if(this.img==1){
    this.Srcimage="assets/img/"+this.img+".jpg";
   }else{
    this.img--;
    this.Srcimage="assets/img/"+this.img+".jpg";
   }
}
interval:any;
slideImg(){


// this.interval=setInterval(this.slide,500,this.img);
this.interval=setInterval((()=>{
  console.log('hello');
  this.img++;
  this.Srcimage="assets/img/"+this.img+".jpg";
  if(this.img==6){
    this.img=1;
    this.Srcimage="assets/img/"+this.img+".jpg";
  }
}),1000);
 
}

stopImg(){
clearInterval(this.interval);
}

}
