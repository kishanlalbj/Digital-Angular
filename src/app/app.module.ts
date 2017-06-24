import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './sidebar/sidebar.component';

@NgModule({
	declarations: [

	AppComponent,
	NavbarComponent,
	SideBarComponent
	],
	imports: [
	BrowserModule,
	BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
