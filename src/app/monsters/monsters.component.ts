import { Component } from '@angular/core';
import { Monster } from '../monster.model';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent {
  selectedMonster: Monster | null = null;

  onMonsterSelected(monster: Monster) {
    this.selectedMonster = monster;
  }
}
