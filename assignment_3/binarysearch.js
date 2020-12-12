function binarysearch(l, key, len) {
  let left = 0,
    right = len - 1;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (l[mid] == key) {
      return mid;
    }
    if (key < l[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
let l = [1, 2, 3, 4, 8, 9, 15];
let key = 15;
let len = l.length;
//console.log(len);
let t = binarysearch(l, key, len);
if (t == -1) {
  console.log("the element is not found");
} else {
  console.log(t);
}
