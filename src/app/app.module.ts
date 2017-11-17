import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { TunnelComponent } from './tunnel/tunnel.component';
import { CylinderComponent } from './cylinder/cylinder.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home/:id', component: HomeComponent },
  { path: 'cube', component: CubeComponent },
  { path: 'tunnel', component: TunnelComponent },
  { path: 'cyl', component: CylinderComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    TunnelComponent,
    CylinderComponent,
    YoutubeVideoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
