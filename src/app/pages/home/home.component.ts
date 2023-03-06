import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { selectedLanguage } from 'src/app/components/dropdown/dropdown.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.addLangs(['en', 'pt']);
    translate.use('en');
  }

  ngOnInit() {}

  download() {
    this.clickedRouted({externalLink: 'https://wagnercaetano.com/wp-content/uploads/data/Resume-Updated-Wagner-Caetano.pdf'});
  }

  clickedRouted(item: any) {
    if (item.externalLink) {
      this.document.location.href = item.externalLink;
    } else {
      const element = document.querySelector('#'+item.fragment);
      console.log(element);
      if (element) {
        element.scrollIntoView(true);
      }
    }
  }

  handleLanguage(language: selectedLanguage) {
    console.log(language);
    this.translate.use(language.name);
  }
}
