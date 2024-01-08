function cleanSet(set, startString) {
  const strn = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subStrVal = value.substring(startString.length);

      if (subStrVal && subStrVal !== value) {
        strn.push(subStrVal);
      }
    }
  }
  return strn.join('-');
}

export default cleanSet;
