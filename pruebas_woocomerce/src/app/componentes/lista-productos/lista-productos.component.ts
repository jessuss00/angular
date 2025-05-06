import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Productos } from '../../modelos/productos';
import { productosCarrito } from '../../modelos/productoCarrito';
@Component({
  selector: 'app-lista-productos',
  standalone: false,
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: Productos[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(
      productos => {
        this.productos = productos;
        console.log(productos);
      },
      error => {
        console.error('Error al obtener productos', error);
      }
    );
  }
  agregarAlCarrito(producto: Productos) {
    //console.log(producto);
    let iCarrito: productosCarrito = {
      id: producto.id,
      name: producto.name,
      price: producto.price,
      quantity: 1
    }
    if (localStorage.getItem('carrito') === null) {
      let carrito: productosCarrito[] = [];
      carrito.push(iCarrito);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
    else {
      let carritoStorage = localStorage.getItem('carrito') as string;
      let carrito = JSON.parse(carritoStorage);
      let index = -1;
      for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === iCarrito.id) {
          let intemC: productosCarrito = carrito[i];
          if (iCarrito.id = intemC.id) {
            index = i;
            break;
          }
        }
      }
      if (index === -1) {
        carrito.push(iCarrito);
        localStorage.setItem('carrito', JSON.stringify(carrito));
      }
      else {
        let intemD: productosCarrito = carrito[index];
        intemD.quantity++;
        carrito[index] = intemD;
        localStorage.setItem('carrito', JSON.stringify(carrito));
      }
    }

  }
  mostrarAlerta() {
    alert('¡Producto añadido al carrito!');
  }
  
}
