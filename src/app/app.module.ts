import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlanspageComponent } from './planspage/planspage.component';
import { CardpageComponent } from './cardpage/cardpage.component';
import { PrivacypolicypageComponent } from './privacypolicypage/privacypolicypage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { HeaderComponent } from './common/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PlanspageComponent,
    CardpageComponent,
    PrivacypolicypageComponent,
    LoginpageComponent,
    ProfilepageComponent,
    LoginpageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
