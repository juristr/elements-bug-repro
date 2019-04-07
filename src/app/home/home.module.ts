import {
  NgModule,
  Component,
  Injector,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { createCustomElement } from '@angular/elements';

@Component({
  template: `
    Test element
  `
})
export class TestElement {}

@NgModule({
  declarations: [HomeComponent, TestElement],
  entryComponents: [TestElement],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(TestElement, { injector: this.injector });
    customElements.define('test-element', el);
  }
}
