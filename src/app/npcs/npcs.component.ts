import { Component } from '@angular/core';
import { Npc } from '../npcs.model';

@Component({
  selector: 'app-npcs',
  templateUrl: './npcs.component.html',
  styleUrl: './npcs.component.css'
})
export class NpcsComponent {
  selectedNpc: Npc | null = null;

  onNpcSelected(Npc: Npc) {
    this.selectedNpc = Npc;
  }
}
