import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgramComponent } from './programs/program.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { FullStackComponent } from './programs/fullStackProductEngineering/fullStack.component';
import { FullStackOnlineComponent } from './programs/fullStackOnline/fullStackOnline.component';
import { machineLearningComponent } from './programs/machineLearning/machineLearning.component';
import { javaComponent } from './programs/javaFullStack/javaFullStack.component';
import { QualityEngineeringComponent } from './programs/qualityEngineering/qualityEngineering.component';
import { TattvaComponent } from './tattva/tattva.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegisterComponent } from './register/register.component';
import { Showcase2Component } from './showcase2/showcase2.component';
import { DataService } from './data.service';
import { ContactusService} from './contactus.service';
import { ContactusComponent } from './contactus/contactus.component';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'home',
canActivate:[AuthguardGuard],
  component: HomeComponent 
},
{ path: 'programs', component: ProgramComponent },
// { path: 'showcase', component: ShowcaseComponent },
{ path: 'programs/fullStackProductEngineering', component: FullStackComponent },
{ path: 'programs/fullStackOnline', component: FullStackOnlineComponent },
{ path: 'programs/javaFullStack', component: javaComponent },
{ path: 'programs/machineLearning', component: machineLearningComponent },
{ path: 'programs/qualityEngineering', component: QualityEngineeringComponent },
{ path: 'register',component: RegisterComponent },
{ path: 'tattva', component: TattvaComponent },
{ path: 'login', component: LoginComponent },
{ path: 'gallery', component: GalleryComponent },
{ path: 'showcase2',component: Showcase2Component },
{ path: 'contactus',component: ContactusComponent }
];

@NgModule({
	declarations: [
	AppComponent,
	NavbarComponent,
	HomeComponent,
	ProgramComponent,
	RegisterComponent,
	ShowcaseComponent,
	FullStackComponent,
	machineLearningComponent,
	QualityEngineeringComponent,
	javaComponent,
	FullStackOnlineComponent,
	TattvaComponent,
	LoginComponent,
	GalleryComponent,
	FooterComponent,
	Showcase2Component,
	ContactusComponent
	],
	imports: [
	RouterModule.forRoot(routes),
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	HttpModule

	],
	providers: [DataService,
				ContactusService,
				UserService,
				AuthguardGuard
			],
	bootstrap: [AppComponent]
})
export class AppModule { }
