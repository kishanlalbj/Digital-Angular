import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'showcase', component: ShowcaseComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}
