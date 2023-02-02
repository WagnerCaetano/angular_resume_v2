import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavComponent } from 'src/app/components/nav/nav.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [NavComponent, CommonModule, ButtonComponent, FooterComponent],
  standalone: true
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
