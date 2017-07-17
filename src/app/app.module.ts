import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component'
import { NavbarComponent } from './navbar/navbar.component';
import { ProgramComponent } from './programs/program.component';


@NgModule({
	declarations: [

	AppComponent,
	NavbarComponent,
	HomeComponent,
	ProgramComponent
	],
	imports: [
	BrowserModule,
	BrowserAnimationsModule

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
