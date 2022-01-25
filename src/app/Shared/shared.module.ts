import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SvgComponent} from './Components/svg/svg.component';
import {AlphabetComponent} from './Components/alphabet/alphabet.component';

@NgModule({
  declarations: [SvgComponent, AlphabetComponent],
  exports: [AlphabetComponent],
  imports: [CommonModule]
})
export class SharedModule {
}
