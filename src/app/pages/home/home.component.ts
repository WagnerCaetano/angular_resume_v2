import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavComponent } from 'src/app/components/nav/nav.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [NavComponent, CommonModule, ButtonComponent, FooterComponent],
  standalone: true,
})
export class HomeComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {}

  download() {
    this.clickedRouted({externalLink: '/download/resume-wagner-caetano.pdf'});
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
}
