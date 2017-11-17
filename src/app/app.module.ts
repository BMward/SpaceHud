import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { TunnelComponent } from './tunnel/tunnel.component';
import { CylinderComponent } from './cylinder/cylinder.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'cube', component: CubeComponent },
  { path: 'tunnel', component: TunnelComponent } ,
  { path: 'cyl', component: CylinderComponent } ,
  { path: 'yt/:id', component: AppComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    TunnelComponent,
    CylinderComponent
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
