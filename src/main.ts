import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { RouterModule, provideRouter } from '@angular/router'; // Importing the necessary Router functions
import { HomeComponent } from './app/features/home/home.component';
import { ARTCComponent } from './app/features/website-content/artc/artc.component';
import { BESTComponent } from './app/features/website-content/best/best.component';
import { MeComponent } from './app/features/website-content/me/me.component';
import { SkillsComponent } from './app/features/website-content/skills/skills.component';
import { SkytechComponent } from './app/features/website-content/skytech/skytech.component';
import { LogoutComponent } from './app/core/components/logout/logout.component';


const routes = [
  { path: '', component: HomeComponent },
  { path: 'artc', component: ARTCComponent },
  { path: 'best', component: BESTComponent },
  { path: 'me', component: MeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'skytech', component: SkytechComponent },
  { path: 'logout', component: LogoutComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide the router configuration here
  ]
})
  .catch((err) => console.error(err));