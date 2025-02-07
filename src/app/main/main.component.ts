import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface extra {
  nombre: string;
  precio: number;
}

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
  contador: number = 0;
  contador2: number = 0;
  total: number = 0;

  aumentar() {
    this.contador++;
    this.total = this.contador*500;
  }

  disminuir() {
    
    if (this.contador > 0){
      this.contador--;
      this.total = this.total-500;
    }
  }
  aumentar2() {
    this.contador2++;
  }

  disminuir2() {
    
    if (this.contador > 0){
      this.contador2--;
    } 
  }

  extras: extra [] = [
    {nombre: 'mascota', precio: 250},
    {nombre: 'mascota', precio: 250},
    {nombre: 'mascota', precio: 250},
    {nombre: 'mascota', precio: 250},
    {nombre: 'mascota', precio: 250}
  ];


  actualizarTotal(extra: extra, event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.total += extra.precio;
    } else {
      this.total -= extra.precio;
    }
  }
}
