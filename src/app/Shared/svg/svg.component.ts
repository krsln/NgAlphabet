import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Svg} from 'src/app/Modules/Alphabet/Models';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.svg',
  styleUrls: ['./svg.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SvgComponent implements OnInit {
  @Input() Svg: Svg;

  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    // console.log(this.Svg);
  }

  SanitizeStyle(text): SafeStyle {
    return this.domSanitizer.bypassSecurityTrustStyle(text);
  }
}
