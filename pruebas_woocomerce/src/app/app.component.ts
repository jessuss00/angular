import { Component , OnInit} from '@angular/core';
import { ProductoService, Producto } from './services/producto.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private productoService: ProductoService) {}
  ngOnInit() {
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
  
  //title = 'pruebas_woocomerce';
}
