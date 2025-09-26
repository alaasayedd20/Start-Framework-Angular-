import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { TitleComponent } from "../title/title.component";
import { IItem } from '../iitem';
import { NgIf } from "../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, TitleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  items:IItem[] = [
    {img:"images/port1.png"},
    {img:"images/port2.png"},
    {img:"images/port3.png"},
    {img:"images/port1.png"},
    {img:"images/port2.png"},
    {img:"images/port3.png"},
  ]

  selectedImage: string | null = null;

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
