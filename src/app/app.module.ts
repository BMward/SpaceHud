import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { TunnelComponent } from './tunnel/tunnel.component';
import { CylinderComponent } from './cylinder/cylinder.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { HomeComponent } from './home/home.component';
import { ButtonPanelComponent } from './button-panel/button-panel.component';
import { ApodService } from './Services/apod.service';
import { RadioService } from './Services/radio.service';

const appRoutes: Routes = [
  { path: 'home/:id', component: HomeComponent },
  { path: 'cube', component: CubeComponent },
  { path: 'tunnel', component: TunnelComponent },
  { path: 'cyl', component: CylinderComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    TunnelComponent,
    CylinderComponent,
    YoutubeVideoComponent,
    HomeComponent,
    ButtonPanelComponent
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
