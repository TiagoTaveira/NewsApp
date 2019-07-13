import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule,
  MatMenuModule, MatToolbarModule,
  MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';


import { CustomMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Router, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'userMenu', component: UserComponent},
  { path: '', component: FeedComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    CustomMaterialModule,
    AppRoutingModule,
    RouterModule.forRoot(routes,
      { enableTracing: false },
    )
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
