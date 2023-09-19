import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzServices) {}

  // public characters: Character[] = this.dbzService.characters;

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  public onNewCharacterReceived(character: Character): void {
    this.dbzService.onNewCharacterReceived(character);
  }

  public onDeleteCharacterReceivedById(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }
}
