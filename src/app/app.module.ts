import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DynamicElementsComponent } from "./dynamic-elements/dynamic-elements.component";
import { DataService } from "./services/data.services";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, DynamicElementsComponent],
  imports: [HttpClientModule, BrowserModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
