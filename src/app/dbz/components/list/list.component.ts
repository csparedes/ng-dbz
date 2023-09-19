import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Output()
  public onDeleteEmit: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{ name: 'Trunks', power: 10 }];

  public deleteCharacterById(id: string){
    this.onDeleteEmit.emit(id)
  }
}
