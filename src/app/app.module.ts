import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD
import { ShowcaseComponent } from './showcase/showcase.component';
=======
import { ProgramComponent } from './programs/program.component';
>>>>>>> 8735cc434f0bc7bed699813181a2e7da2b00563e

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
<<<<<<< HEAD
{ path: 'products', component: ShowcaseComponent }
=======
{ path: 'programs', component: ProgramComponent }
>>>>>>> 8735cc434f0bc7bed699813181a2e7da2b00563e
];

@NgModule({
	declarations: [
	AppComponent,
	NavbarComponent,
	HomeComponent,
<<<<<<< HEAD
	ShowcaseComponent
=======
	ProgramComponent
>>>>>>> 8735cc434f0bc7bed699813181a2e7da2b00563e
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
