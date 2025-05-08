import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuVisible = false;

  abrirMenu() {
    this.menuVisible = true;
  }

  cerrarMenu() {
    this.menuVisible = false;
  }
}
