import { Component } from '@angular/core';

@Component({
	selector:'nav',
	templateUrl:'navbar.component.html',
	styleUrls:['navbar.css']
})

export class NavbarComponent {
	public logourl = 'assets/navbar/wiprodigitallogo.png' ;
	public my_Class = 'sidebar-wrapper';

	randomcolor = this.getRandomColor();

	//function to get random colors
	public getRandomColor() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++){
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	//function to set a new random color
	setColor() {
		this.randomcolor = this.getRandomColor();
	}

	// toggleClass() {
		// 	if(this.my_Class=="sidebar-wrapper"){
			// 		this.my_Class='sidebar-enlarged';
			// 	}else{
				// 		this.my_Class='sidebar-wrapper';
				// 	}
				// }
}