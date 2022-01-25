import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-layout-zero',
  templateUrl: './layout-zero.component.html',
  styleUrls: ['./layout-zero.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutZeroComponent implements OnInit {

  Themes = ['Light', 'Dark', 'Night'];
  Selected = 'Light';
  constructor() {
  }

  ngOnInit() {
    if (localStorage.getItem('Theme')) {
      this.Selected = localStorage.getItem('Theme') || 'Light';
      document.body.className = 'Theme-' + this.Selected;
    }
  }

  ChangeTheme(theme: string) {
    this.Selected = theme.toLowerCase();
    document.body.className = 'Theme-' + this.Selected;
    localStorage.setItem('Theme', this.Selected);
  }

}
