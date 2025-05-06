import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from '../../../modelos/productos';
import { ProductoService } from '../../../services/producto.service';


@Component({
  selector: 'app-descripcion',
  standalone: false,
  templateUrl: './descripcion.component.html',
  styleUrl: './descripcion.component.css'
})
export class DescripcionComponent implements OnInit {
  productos: Productos[] = [];
  productosSelected: Productos | undefined; // <- ya no usamos `!`, ahora controlamos si puede ser undefined
  currentImageIndex: number = 0;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idProducto = Number(this.route.snapshot.paramMap.get('id'));

    this.productoService.obtenerProductos().subscribe(
      productos => {
        this.productos = productos;
        const encontrado = productos.find(p => p.id === idProducto);
        if (encontrado) {
          this.productosSelected = encontrado;
        } else {
          console.warn('Producto no encontrado con ID:', idProducto);
        }
      },
      error => {
        console.error('Error al obtener productos', error);
      }
    );
  }

  nextImage() {
    if (this.productosSelected?.images && this.currentImageIndex < this.productosSelected.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  prevImage() {
    if (this.productosSelected?.images && this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }
}
