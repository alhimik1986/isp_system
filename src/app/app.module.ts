import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AppService } from './app.service';
import { SanitizeHtmlDirective } from './shared/sanitize-html/sanitize-html.directive';
import { AjaxTooltipsterComponent } from './components/ajax-tooltipster/ajax-tooltipster.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [
  	AppComponent,
    SanitizeHtmlDirective,
    AjaxTooltipsterComponent
  ],
  providers:    [ AppService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
