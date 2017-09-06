import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { DataService } from '../data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

//   constructor(private dataservice:DataService,private http:Http) {
//
//    }
//  cityname = '';
//    weatherurl:any= "http://api.openweathermap.org/data/2.5/weather?q="+this.cityname +"&appid=cdf067bb505759a8bc20b11b3ac5b607";
//
//    cityhumid = '';
//    searchcity() {
//      this.http.get("http://localhost:4200/api")
//      .subscribe(
//        (res:Response)=>{
//          const weatherOfCity = res;
//          console.log(weatherOfCity);
//         //  this.cityhumid = weatherOfCity.main.humidity;
//        }
//      )
//    }
// something:string = '';
  ngOnInit() {
    // console.log(this.dataservice.cars);
    // this.something = this.dataservice.myData();
  }



}
