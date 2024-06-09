class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
      this.value = value;
      this.next = null;
  }
}

export class Pilha<T> {
  private top: Node<T> | null;

  constructor() {
      this.top = null;
  }

  peek(): T | null {
      if (this.isEmpty()) {
          return null;
      }
      return this.top!.value;
  }

  push(value: T): void {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
  }

  pop(): T | null {
      if (this.isEmpty()) {
          return null;
      }
      const removedNode = this.top;
      this.top = this.top!.next;
      return removedNode!.value;
  }

  isEmpty(): boolean {
      return this.top === null;
  }
}
