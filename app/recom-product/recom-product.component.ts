import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { TitleComponent } from "../title/title.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { IItem } from '../iitem';

@Component({
  selector: 'app-recom-product',
  standalone: true,
  imports: [FooterComponent, TitleComponent, NavbarComponent],
  templateUrl: './recom-product.component.html',
  styleUrl: './recom-product.component.css'
})
export class RecomProductComponent {
  items:IItem[] = [
        {img:"images/port1.png"},
        {img:"images/port2.png"},
        {img:"images/port3.png"},
        {img:"images/port1.png"},
        {img:"images/port2.png"},
        {img:"images/port3.png"},
        {img:"images/port1.png"},
        {img:"images/port2.png"},
        {img:"images/port3.png"},
        {img:"images/port1.png"},
        {img:"images/port2.png"},
        {img:"images/port3.png"},
        {img:"images/port1.png"},
        {img:"images/port2.png"},
        {img:"images/port3.png"},
        {img:"images/port1.png"},
        {img:"images/port2.png"},
        {img:"images/port3.png"},
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
