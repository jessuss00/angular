import { Component, Signal } from '@angular/core';
import {GoogleMap, MapMarker} from '@angular/google-maps';

@Component({
  selector: 'app-portada',
  standalone: false,
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css'
})
export class PortadaComponent {
  center: google.maps.LatLngLiteral = {lat: 37.3733206, lng: -5.7624021};
  zoom = 4;
  display: google.maps.LatLngLiteral | undefined; // Permitir que display sea undefined

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.center = event.latLng.toJSON();
    }
  }
  
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.display = event.latLng.toJSON();
    }
  }
  
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: 37.3733206, lng: -5.7624021 } // Marca predeterminada
  ];

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markerPositions.push(event.latLng.toJSON());
    }
  }
  
}
