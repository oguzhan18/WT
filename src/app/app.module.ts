import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/utils/navbar/navbar.component';
import { FooterComponent } from './component/utils/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StripHeadComponent } from './component/utils/strip-head/strip-head.component';
import { HomeComponent } from './component/layout/home/home.component';
import { AboutComponent } from './component/layout/about/about.component';
import { ContactComponent } from './component/layout/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { registerLocaleData } from '@angular/common';
import   localeTr from '@angular/common/locales/tr';
import   localeTrExtra from '@angular/common/locales/extra/tr';
import { TableComponent } from './component/component/table/table.component';
import { SliderComponent } from './component/component/slider/slider.component';
import { HomeProvider } from './component/service/home.provider';
import { HomeContentComponent } from './component/component/home-content/home-content.component';
import { FixFooterComponent } from './component/component/fix-footer/fix-footer.component';
import { ScreenPageComponent } from './component/layout/screenpage/screenpage.component';
import { ScreenTableComponent } from './component/component/screen-table/screen-table.component';
registerLocaleData(localeTr, 'tr-TR', localeTrExtra);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    StripHeadComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TableComponent,
    SliderComponent,
    HomeContentComponent,
    FixFooterComponent,
    ScreenPageComponent,
    ScreenTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,

    MatIconModule,
  ],
  providers: [HomeProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
