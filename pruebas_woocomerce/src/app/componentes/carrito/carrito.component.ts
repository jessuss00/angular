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
    let carritoStorage = localStorage.getItem('carrito') as string;
    let carrito: productosCarrito[] = JSON.parse(carritoStorage);
    this.listaCarrito = carrito;
  }
  vaciarCarrito() {
    localStorage.clear();
    this.listaCarrito = [];
  }
  mostrarAlerta() {
    alert('Carrito vacio');
  }
  
}
