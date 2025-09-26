import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { TitleComponent } from "../title/title.component";
import { LightTitleComponent } from "../light-title/light-title.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavbarComponent, FooterComponent, TitleComponent, LightTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
