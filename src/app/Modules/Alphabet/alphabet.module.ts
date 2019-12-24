import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlphabetRoutingModule} from './alphabet-routing.module';
import {AlphabetService} from './alphabet.service';
import {AurebeshComponent, FutharkComponent, OrkhonComponent, YeniseiComponent} from './Components';
import {SharedModule} from '../../Shared/shared.module';
import { AlphabetComponent } from './Components/alphabet/alphabet.component';

@NgModule({
  declarations: [OrkhonComponent, YeniseiComponent, FutharkComponent, AurebeshComponent, AlphabetComponent],
  imports: [
    CommonModule,
    AlphabetRoutingModule,
    SharedModule
  ],
  providers: [AlphabetService]
})
export class AlphabetModule {
}
