import { Component, Input } from '@angular/core';
import { Monster } from '../monster.model';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.css']
})
export class MonsterDetailComponent {
  @Input() monster: Monster | null = null;
}
