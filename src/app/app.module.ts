import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent }
];

@NgModule({
	declarations: [
	AppComponent,
	NavbarComponent,
	HomeComponent
	],
	imports: [
	RouterModule.forRoot(routes),
	BrowserModule,
	BrowserAnimationsModule

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
