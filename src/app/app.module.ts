import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
	declarations: [
 AppRoutingModule
	AppComponent,
	NavbarComponent,
	HomeComponent
	],
	imports: [
	BrowserModule,
	BrowserAnimationsModule

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
