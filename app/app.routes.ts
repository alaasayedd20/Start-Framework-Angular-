import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full",title:"home"},
  {path:'home', component:HomeComponent, pathMatch:"full",title:"home"},
  {path:'about', component:AboutComponent, pathMatch:"full",title:"about"},
  {path:'portfolio', component:PortfolioComponent, pathMatch:"full",title:"portfolio"},
  {path:'gallery', component:GalleryComponent, pathMatch:"full",title:"gallery"},
  {path:'contact', component:ContactComponent, pathMatch:"full",title:"contact"},
  {path:'**', component:NotfoundComponent, pathMatch:"full",title:"not found"},
];
