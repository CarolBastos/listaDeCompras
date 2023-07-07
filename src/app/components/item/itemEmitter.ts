import { EventEmitter } from '@angular/core';
import { Item } from '../../interfaces/iItem';

export class ItemEventEmitter extends EventEmitter {
  emitindoItemParaEditar(item: Item) {
    this.emit(item);
  }

  emitindoIdParaDeletar(item: number) {
    this.emit(item);
  }
}
