import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
selector: 'home',
templateUrl:'home.component.html',
styleUrls:['home.css']
})

export class HomeComponent {

    constructor(private userservice:UserService) {
console.log(document.cookie);
    }


    ngOnInit() {

    }
}
