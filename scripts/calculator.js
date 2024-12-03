const calculator = {
  add(a, b) {
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
      return 0;
    }
    return a + b;
  },
  subtract(a, b) {
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
      return 0;
    }
    return a - b;
  },
  divide(a, b) {
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
      return 0;
    }
    return a / b;
  },
  multiply(a, b) {
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
      return 0;
    }
    return a * b;
  },
};



module.exports = calculator;
