interface Validatable {
  validate(): void;
}

// first-in-first-out (FIFO) data structure.
class Queue<T extends Validatable> {
  public data:T[] = []
  public push(datum:T) {
    datum.validate()
    // array push method add a new element to the right
    this.data.push(datum)
  }
  public pop() {
    // array shift method removes the first element from an array
    // (from the left) and returns that removed element.
    return this.data.shift()
  }
}

// ----------------------------------
// Usage with type User
class User implements Validatable {
  public constructor(
    public name: string,
    public surname: string
  ) {}

  public validate() {
    if ( this.name === '' || this.surname === '' ) {
      throw new Error('Invalid user')
    }
  }
}

export {
  Queue,
  User
}

