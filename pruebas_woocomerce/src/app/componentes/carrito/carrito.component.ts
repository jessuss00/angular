import { Component } from '@angular/core';
import { productosCarrito } from '../../modelos/productoCarrito';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  listaCarrito: productosCarrito[] | undefined;

  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const carritoStorage = localStorage.getItem('carrito');
      if (carritoStorage) {
        this.listaCarrito = JSON.parse(carritoStorage);
      } else {
        this.listaCarrito = [];
      }
    } else {
      this.listaCarrito = [];
    }
  }

  vaciarCarrito() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
    this.listaCarrito = [];
  }

  mostrarAlerta() {
    alert('Carrito vacio');
  }

  eliminarUnidad(productoId: number) {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const carritoStorage = localStorage.getItem('carrito');
      if (!carritoStorage) return;

      let carrito: productosCarrito[] = JSON.parse(carritoStorage);
      const index = carrito.findIndex(item => item.id === productoId);

      if (index !== -1) {
        if (carrito[index].quantity > 1) {
          carrito[index].quantity--;
        } else {
          carrito.splice(index, 1); 
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        this.listaCarrito = [...carrito]; 
      }
    }
  }
}
