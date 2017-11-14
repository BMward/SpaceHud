import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { TunnelComponent } from './tunnel/tunnel.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'cube', component: CubeComponent },
  { path: 'tunnel', component: TunnelComponent } 
]


@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    TunnelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
