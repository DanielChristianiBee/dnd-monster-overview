import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonstersComponent } from './monsters/monsters.component';
import { MonsterListComponent } from './monster-list/monster-list.component';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';
import { HomeComponent } from './home/home.component';
import { NpcsComponent } from './npcs/npcs.component';
import { NpcsListComponent } from './npcs-list/npcs-list.component';
import { NpcsDetailComponent } from './npcs-detail/npcs-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MonstersComponent,
    MonsterListComponent,
    MonsterDetailComponent,
    HomeComponent,
    NpcsComponent,
    NpcsListComponent,
    NpcsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
