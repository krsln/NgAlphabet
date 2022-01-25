import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlphabetRoutingModule} from './alphabet-routing.module';
import {HomeComponent} from './Components/home/home.component';
import {SharedModule} from "../../Shared/shared.module";

@NgModule({
  declarations: [HomeComponent,],
  imports: [CommonModule, AlphabetRoutingModule, SharedModule]
})
export class AlphabetModule {
}
