class Traveler {
  constructor(name) {
    this._name = name;
    this._food = 1;
    this._isHealthy = true;
  }
  get food() {
    return this._food
  }

  set food(value) {
    this._food = value;
  }

  get isHealthy() {
    return this._isHealthy;
  }

  set isHealthy(boolean) {
    return this._isHealthy = boolean;

  }


  hunt() {
    this._food += 2
  }

  eat() {
    if (this._food > 0) {
      return this._food -= 1;
    }
    if (this._food === 0) {
      return this._isHealthy === false;
    }
  }
}