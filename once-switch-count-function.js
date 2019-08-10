
// make sure fn1 and fn2 be called alternatively

const alternator = (fn1, fn2) => {
  
  return (...args) => {
    fn1(...args);
    [fn1, fn2] = [fn2, fn1];
  }
}


// make sure f function only be called once, g is the function could be called after called f funtion

const onceAndAfter = (f, g) => {
  return (...args) => {
    f ? f(...args) : g(...args);
    f = null;
  }
}

// make sure the function be called less than limit times
const thisManyTimes = (fn, limit) => {
	return (...args) => {
		if (limit > 0) {
			limit--;
			return fn(...args);
		}
	};
}