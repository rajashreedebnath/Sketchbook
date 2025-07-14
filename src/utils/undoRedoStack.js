export default class UndoRedoStack {
  constructor() {
    this.stack = [];
    this.pointer = -1;
  }

  push(state) {
    this.stack = this.stack.slice(0, this.pointer + 1);
    this.stack.push(state);
    this.pointer++;
  }

  undo() {
    if (this.canUndo()) {
      this.pointer--;
      return this.stack[this.pointer];
    }
    return null;
  }

  redo() {
    if (this.canRedo()) {
      this.pointer++;
      return this.stack[this.pointer];
    }
    return null;
  }

  canUndo() {
    return this.pointer > 0;
  }

  canRedo() {
    return this.pointer < this.stack.length - 1;
  }

  current() {
    return this.stack[this.pointer];
  }
}
