import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../modelos/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl ="https://jmadronal.moneomk.com/wp-json/wc/v3/products"
  private username = 'ck_7b1e446b4f0954816ebc65597c088bd81913ac1d';
  private password = 'cs_256faedba257e5bba5acc81de05dab60a25f575b';
  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<Productos[]> {
    const auth = btoa(`${this.username}:${this.password}`);
    const headers =new HttpHeaders({ 'Authorization': `Basic ${auth}` });

    return this.http.get<Productos[]>(this.apiUrl, { headers });
  }
}
