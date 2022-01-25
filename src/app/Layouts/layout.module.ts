import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutZeroComponent} from './';
import {RouterModule} from "@angular/router";
import {NotifyModule} from "@qrsln/loot-box/Libs/Notify";
import {BreadcrumbModule} from "@qrsln/loot-box/Libs/Breadcrumb";

@NgModule({
  declarations: [LayoutZeroComponent],
  exports: [LayoutZeroComponent],
    imports: [CommonModule, RouterModule, NotifyModule, BreadcrumbModule]
})
export class LayoutModule {
}
