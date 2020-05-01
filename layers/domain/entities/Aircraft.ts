export default class Aircraft {
  readonly #id: number;
  readonly #name: string;

  constructor(id: number, name: string) {
    this.#id = id;
    this.#name = name;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  unmarshal() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
