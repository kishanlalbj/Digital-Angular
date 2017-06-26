import { Component } from '@angular/core';

@Component({
	selector:'side-bar',
	templateUrl:'sidebar.component.html',
	styleUrls:['sidebar.css']
})

export class SideBarComponent {
	public logourl = 'assets/navbar/wiprodigitallogo.png';
	public sidenav_width = '0px';
	public height; 

	expand() {
		if(this.height !='100px'){
			this.height = "100px";
		}else{
			this.height = '20px';
		}
	}

	toggleClass() {
		if(this.sidenav_width=='0px') {
			this.sidenav_width = '250px';
		}else{
			this.sidenav_width='0px';
		}
	}
}