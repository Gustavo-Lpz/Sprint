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
    this.actualizarTotal();
  }
  
  disminuir() {
    if (this.contador > 0) {
      this.contador--;
      this.actualizarTotal();
    }
  }
  
  aumentar2() {
    this.contador2++;
    this.actualizarTotal();
  }
  
  disminuir2() {
    if (this.contador2 > 0) {
      this.contador2--;
      this.actualizarTotal();
    }
  }
  
  // Método para recalcular el total sin extras
  actualizarTotal() {
    this.total = (this.contador * 500) + (this.contador2 * 1000) + this.calcularTotalExtras();
  }
  
  // Lista de extras
  extras: extra[] = [
    { nombre: 'MASCOTA', precio: 250 },
    { nombre: 'CALEFACCIÓN', precio: 500 },
    { nombre: 'RUTA DE MONTAÑA', precio: 150 },
    { nombre: 'SENDERISMO', precio: 200 },
    { nombre: 'VISITA A LA CASCADA', precio: 50 }
  ];
  
  // Set para almacenar los extras seleccionados
  extrasSeleccionados: Set<string> = new Set();
  
  // Método para manejar la selección/deselección de extras
  actualizarTotalExtras(extra: extra, event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.extrasSeleccionados.add(extra.nombre);
    } else {
      this.extrasSeleccionados.delete(extra.nombre);
    }
    this.actualizarTotal(); // Recalcula el total después de modificar los extras
  }
  
  // Método para calcular el total de los extras seleccionados
  calcularTotalExtras(): number {
    let totalExtras = 0;
    for (let extra of this.extras) {
      if (this.extrasSeleccionados.has(extra.nombre)) {
        totalExtras += extra.precio;
      }
    }
    return totalExtras;
  }
}
