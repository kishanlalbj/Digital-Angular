import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgramComponent } from './programs/program.component';
import { ShowcaseComponent } from './showcase/showcase.component'

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'programs', component: ProgramComponent },
{ path: 'showcase', component: ShowcaseComponent }

];

@NgModule({
	declarations: [
	AppComponent,
	NavbarComponent,
	HomeComponent,
	ProgramComponent,
	ShowcaseComponent
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
