// Given an n x n array,
// return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array.flat()
Object.defineProperty(Array.prototype, "flat", {
  value: function(depth = 1) {
    return this.reduce(function(flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) && depth > 1
          ? toFlatten.flat(depth - 1)
          : toFlatten
      );
    }, []);
  }
});

const arr = [[1, 2, 3, 1], [4, 5, 6, 4], [7, 8, 9, 7], [7, 8, 9, 7]];

const snail = array => {
  let copy_arr = [...array];
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(copy_arr.shift());
    for (let n = 0, len = copy_arr.length; n < len; n++) {
      result.push(copy_arr[n].pop());
      copy_arr[n].reverse();
    }
    copy_arr.reverse();
  }

  return result.flat();
};

console.log(snail(arr));
