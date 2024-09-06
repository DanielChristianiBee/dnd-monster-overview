import { Component, Input } from '@angular/core';
import { Npc } from '../npcs.model';

@Component({
  selector: 'app-npcs-detail',
  templateUrl: './npcs-detail.component.html',
  styleUrl: './npcs-detail.component.css'
})
export class NpcsDetailComponent {
  @Input() Npc: Npc | null = null;
}
