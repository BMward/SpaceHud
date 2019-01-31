import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { CylinderComponent } from './cylinder/cylinder.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { HomeComponent } from './home/home.component';
import { ButtonPanelComponent } from './button-panel/button-panel.component';
import { ApodService } from './Services/apod.service';
import { RadioService } from './Services/radio.service';
import { RadioPanelComponent } from './radio-panel/radio-panel.component';

const appRoutes: Routes = [
  { path: 'home/:id', component: HomeComponent },
  { path: 'cube/:id', component: CubeComponent },
  { path: 'cyl', component: CylinderComponent },
  { path: '', redirectTo: 'home/0', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    CylinderComponent,
    YoutubeVideoComponent,
    HomeComponent,
    ButtonPanelComponent,
    RadioPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true }
    )
  ],
  providers: [ApodService, RadioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
