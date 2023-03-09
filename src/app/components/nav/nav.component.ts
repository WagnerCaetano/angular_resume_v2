import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export interface LinksInfo {
  name: string;
  url: {
    externalLink: any;
    fragment?: string;
  }
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  items: LinksInfo[] = [];
  navbarOpen = false;

  @Output()
  clickedRoute = new EventEmitter();

  @Output()
  languageEmitter = new EventEmitter();

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.addLangs(['en', 'pt']);
    translateService.use('en');
  }

  ngOnInit(): void {

    this.items =  [
      {
        name:'RESUME_NAV.HOME',
        url: {
          externalLink: null,
          fragment: 'intro',
        },
      },
      {
        name:'RESUME_NAV.ABOUT',
        url: {
          externalLink: null,
          fragment: 'about',
        },
      },
      {
        name:'RESUME_NAV.SERVICES',
        url: {
          externalLink: 'https://wagnercaetano.com/agencia/',
        },
      },
      {
        name:'RESUME_NAV.ABILITIES',
        url: {
          externalLink: null,
          fragment: 'skills',
        },
      },
      {
        name:'RESUME_NAV.CONTACT',
        url: {
          externalLink: null,
          fragment: 'contacts',
        },
      },
    ];
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  navigate(item: any) {
    this.clickedRoute.emit(item);
  }

  languageHandle(event: any) {
    this.translateService.use(event.name);
    this.translateService.resetLang
    this.languageEmitter.emit(event);
  }
}
