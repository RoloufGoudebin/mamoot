import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: 'contact', component: ContactComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'about', component: AboutComponent},
  { path: '', component: ContentComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
