import { Component, OnInit } from '@angular/core';
import { ContactusService} from '../contactus.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
something:any = "";
  UserDetails = {
    name:'',
    email:'',
    subject:'',
    message:''
  }

  constructor(private contactusService: ContactusService) { }

public submitForm(): void {

    this.contactusService.sendMail(this.UserDetails).subscribe(res => this.something = res);

  }
  ngOnInit() {

  }

}
