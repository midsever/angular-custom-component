import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import packageJson from '../../package.json';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule
  ],
  entryComponents: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const version = packageJson.version.split('.').join('-');
    // customElements.define(`ic-custom-component-${version}`, createCustomElement(CustomComponent, { injector: this.injector }));
  }
  ngDoBootstrap() { }
}
