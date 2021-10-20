
class Wagon {
  constructor(capacity) {
    this._capacity = capacity;
    this._travelers = [];

  }
  getAvailableSeatCount() {
    return this._capacity - this._travelers.length
  }

  join(newTraveler) {
    if (this._capacity > this._travelers.length) {
      return this._travelers.push(newTraveler);
    }
  }
  shouldQuarantine() {
    for (let i = 0; i < this._travelers.length; i++) {
      if (this._travelers[i].isHealthy === false) {
        return true;
      }
    }
    return false;
  }

  totalFood() {
    let totalFood = 0;
    for (let i = 0; i < this._travelers.length; i++) {
      totalFood += this._travelers[i].food;
    }
    return totalFood;
  }
}
