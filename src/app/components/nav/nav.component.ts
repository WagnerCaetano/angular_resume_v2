import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
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
        externalLink: 'https://wagnercaetano.com/agencia/',
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

  @Output()
  languageEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  navigate(item: any) {
    this.clickedRoute.emit(item);
  }

  languageHandle(event: any) {
    this.languageEmitter.emit(event);
  }
}
