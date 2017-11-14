import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'cube', component: CubeComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    CubeComponent
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
