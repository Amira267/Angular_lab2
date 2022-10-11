import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent  {

  srcs = ["assets/images/pic1.jpg","assets/images/pic2.jpg", "assets/images/pic3.jpg","assets/images/pic4.jpg","assets/images/pic5.jpg"];
  pic = "";
  count = 0;
  interval:any;
  constructor() {
      this.pic = this.srcs[0] ;
    }

    next(){
      this.count ++ ;
      if(( this.count < this.srcs.length))
        this.pic = this.srcs[this.count] ;
      if(this.count == this.srcs.length)
        this.count -- ;


    }
    prev(){

      this.count--;
      if(( this.count >= 0) )
        this.pic = this.srcs[this.count] ;

      if(this.count < 0 )
        this.count = 0 ;

    }
    slide(){
      this.interval = setInterval(()=>{
        this.count = (this.count + 1) % this.srcs.length;
        this.pic = this.srcs[this.count];

      }, 500);
    }

    stop(){
      clearInterval(this.interval);
    }

}
