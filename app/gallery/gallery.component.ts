import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { IItem } from '../iitem';
import { TitleComponent } from "../title/title.component";
import { RecomProductComponent } from '../recom-product/recom-product.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, TitleComponent, RecomProductComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
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
