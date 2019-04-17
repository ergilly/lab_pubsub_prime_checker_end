const PubSub = require('../helpers/pub_sub.js');

class ResultView {
  bindEvents() {
    PubSub.subscribe('PrimeChecker:result-checked', () => {
      const primeNum = event.detail;
      this.displayResult(primeNum);
    })
  };

  displayResult(answer) {
    const resultElement = document.querySelector('#result');
    if (answer === true) {
      resultElement.textContent = 'This is a Prime Number';
    } else {
      resultElement.textContent = 'This is not a Prime Number';
    };

  };
};

module.exports = ResultView;
