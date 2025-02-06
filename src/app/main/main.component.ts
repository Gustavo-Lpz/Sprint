import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  imagen:string="/casa.webp";

  colocarImagen(num: number):void {

    switch (num) {
      case 1: this.imagen = "/casa.webp"; break;
      case 2: this.imagen = "/sala.webp"; break;
      case 3: this.imagen = "/recámara.webp"; break;
    }
  }

  images = [
    '/casa.webp',
    '/sala.webp',
    '/recámara.webp',
  ];

  selectedImage: string = this.images[0];

  selectImage(image: string) {
    this.selectedImage = image;
  }
}
