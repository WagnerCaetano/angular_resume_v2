import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [CommonModule],
})
export class NavComponent {
  items = [
    {
      name: 'Inicio',
      url: {
        externalLink: null,
        fragment: 'intro',
      },
    },
    {
      name: 'Sobre',
      url: {
        externalLink: null,
        fragment: 'about',
      },
    },
    {
      name: 'Serviços',
      url: {
        externalLink: '/agency',
      },
    },
    {
      name: 'Habilidades',
      url: {
        externalLink: null,
        fragment: 'skills',
      },
    },
    {
      name: 'Contato',
      url: {
        externalLink: null,
        fragment: 'contacts',
      },
    },
  ];
  navbarOpen = false;

  @Output()
  clickedRoute = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  navigate(item: any) {
    this.clickedRoute.emit(item);
  }
}
