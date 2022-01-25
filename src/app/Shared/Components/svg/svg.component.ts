import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {DomSanitizer, SafeStyle} from "@angular/platform-browser";
import {Svg} from 'src/app/Modules/Alphabet/Models';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.svg',
  styleUrls: ['./svg.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SvgComponent implements OnInit {
  @Input() Svg!: Svg;

  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    // console.log(this.Svg);
  }

  SanitizeStyle(text: string): SafeStyle {
    return text ? this.domSanitizer.bypassSecurityTrustStyle(text) : '';
  }
}

