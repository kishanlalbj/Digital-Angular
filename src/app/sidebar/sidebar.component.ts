import { Component } from '@angular/core';

@Component({
	selector:'side-bar',
	templateUrl:'sidebar.component.html',
	styleUrls:['sidebar.css']
})

export class SideBarComponent {
	public my_Class = 'sidebar-wrapper';
	toggleClass() {
		if(this.my_Class=="sidebar-wrapper"){
			this.my_Class='sidebar-enlarged';
		}else{
			this.my_Class='sidebar-wrapper';
		}
	}
}