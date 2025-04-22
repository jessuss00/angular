import { Component, OnInit } from '@angular/core';
import { ProductoService, Producto } from '../../services/producto.service';

@Component({
  selector: 'app-lista-productos',
  standalone: false,
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

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
}
