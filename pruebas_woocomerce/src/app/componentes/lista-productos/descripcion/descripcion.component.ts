import { Component } from '@angular/core';
import { Productos } from '../../../modelos/productos';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-descripcion',
  standalone: false,
  templateUrl: './descripcion.component.html',
  styleUrl: './descripcion.component.css'
})
export class DescripcionComponent {
productos: Productos[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(
      Productos => {
        this.productos = Productos;
        console.log(Productos);
      },
      error => {
        console.error('Error al obtener productos', error);
      }
    );
  }



productosSelected!: Productos;
currentImageIndex: number = 0;

nextImage() {
  if (this.productosSelected.images && this.currentImageIndex < this.productosSelected.images.length - 1) {
    this.currentImageIndex++;
  }
}

prevImage() {
  if (this.productosSelected.images && this.currentImageIndex > 0) {
    this.currentImageIndex--;
  }
}

}
