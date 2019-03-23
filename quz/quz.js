/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
  /** Fill in here **/
  B.forEach(element => {
    A.push(element);
  });
  return A;
}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {
  /** Fill in here **/
  var newL = new List(),
    p;
  p = newL;
  L.forEach((item, index) => {
    if (index >= start) {
      p.tail = new List(item);
      p = p.tail;
    }
    if (index >= start + len - 1) {
      return newL.tail;
    }
  });
  return newL.tail;
}
