const PubSub = require('../helpers/pub_sub.js');

class PrimeChecker {
  bindEvents() {
    PubSub.subscribe('FormView:number-submitted', (event) => {
      const inputNum = event.detail;
      const result = this.checkPrime(inputNum);
      PubSub.publish('PrimeChecker:result-checked', result);
    });
  }

  checkPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };
};

module.exports = PrimeChecker;
