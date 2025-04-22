import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id: number;
  name: string;
  price: number;
  images: {
    src: string;
    }[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl ="https://jmadronal.moneomk.com/wp-json/wc/v3/products"
  private username = 'ck_5d90c4a3aec40857441f11ed3adc96c47d73188a';
  private password = 'cs_70d3026407bc5cfd02ed799a56339e30e61209b4';
  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<Producto[]> {
    const auth = btoa(`${this.username}:${this.password}`);
    const headers =new HttpHeaders({ 'Authorization': `Basic ${auth}` });

    return this.http.get<Producto[]>(this.apiUrl, { headers });
  }
}
