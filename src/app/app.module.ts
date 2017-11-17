import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { TunnelComponent } from './tunnel/tunnel.component';
import { CylinderComponent } from './cylinder/cylinder.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'cube', component: CubeComponent },
  { path: 'tunnel', component: TunnelComponent },
  { path: 'cyl', component: CylinderComponent },
  { path: 'video/:id', component: YoutubeVideoComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    TunnelComponent,
    CylinderComponent,
    YoutubeVideoComponent
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
