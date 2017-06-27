import { Component } from '@angular/core';

@Component({
	selector:'side-bar',
	templateUrl:'sidebar.component.html',
	styleUrls:['sidebar.css']
})

export class SideBarComponent {

	public move = "-190px";
	public hideand = false;
	public float =" right";

toggle() {
	if(this.move=='-190px'){
	this.move='0px';
	this.hideand = true;
	}else{
	this.move='-190px';
	this.hideand= false;
	}
	}
}
