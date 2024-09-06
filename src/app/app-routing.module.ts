import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MonstersComponent } from './monsters/monsters.component';
import { NpcsComponent } from './npcs/npcs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'monsters', component: MonstersComponent },
  { path: 'npcs', component: NpcsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
