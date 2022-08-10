class Class {
  constructor(a: string) {
    this._name = a;
  }

  private _name: string = 'kim';

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

class ClassImpl extends Class {}

class ClassImplImpl extends ClassImpl {}
