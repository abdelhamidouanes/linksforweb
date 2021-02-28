import { RealisationService } from './Services/realisation.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { SousmenuComponent } from './sousmenu/sousmenu.component';
import { FooterComponent } from './footer/footer.component';
import { MenubuttonSmComponent } from './menubutton-sm/menubutton-sm.component';
import { CallbuttonSmComponent } from './callbutton-sm/callbutton-sm.component';
import { BigmenuComponent } from './bigmenu/bigmenu.component';
import { SocialmediaSmComponent } from './socialmedia-sm/socialmedia-sm.component';
import { LogoBmComponent } from './logo-bm/logo-bm.component';
import { MenulistBmComponent } from './menulist-bm/menulist-bm.component';
import { ContactBmComponent } from './contact-bm/contact-bm.component';
import { ContactlistBmCComponent } from './contactlist-bm-c/contactlist-bm-c.component';
import { SocialbuttonBmCComponent } from './socialbutton-bm-c/socialbutton-bm-c.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { AboutComponent } from './about/about.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { SolutionSsComponent } from './solution-ss/solution-ss.component';
import { DescriptionSsSComponent } from './description-ss-s/description-ss-s.component';
import { AnimationSsSComponent } from './animation-ss-s/animation-ss-s.component';
import { DecouvrirsepationSsComponent } from './decouvrirsepation-ss/decouvrirsepation-ss.component';
import { LogoFComponent } from './logo-f/logo-f.component';
import { DescriptionFComponent } from './description-f/description-f.component';
import { SocialbuttonFComponent } from './socialbutton-f/socialbutton-f.component';
import { MenuFComponent } from './menu-f/menu-f.component';
import { CopyrightFComponent } from './copyright-f/copyright-f.component';
import { HomeComponent } from './home/home.component';
import { CopyrightBmComponent } from './copyright-bm/copyright-bm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BouleColorComponent } from './boule-color/boule-color.component';
import { MsgInformationComponent } from './msg-information/msg-information.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SousmenuComponent,
    FooterComponent,
    MenubuttonSmComponent,
    CallbuttonSmComponent,
    BigmenuComponent,
    SocialmediaSmComponent,
    LogoBmComponent,
    MenulistBmComponent,
    ContactBmComponent,
    ContactlistBmCComponent,
    SocialbuttonBmCComponent,
    RealisationsComponent,
    AboutComponent,
    SolutionsComponent,
    SolutionSsComponent,
    DescriptionSsSComponent,
    AnimationSsSComponent,
    DecouvrirsepationSsComponent,
    LogoFComponent,
    DescriptionFComponent,
    SocialbuttonFComponent,
    MenuFComponent,
    CopyrightFComponent,
    HomeComponent,
    CopyrightBmComponent,
    BouleColorComponent,
    MsgInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [RealisationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
