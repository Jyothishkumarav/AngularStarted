import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
