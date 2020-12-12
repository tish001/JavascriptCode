function swap(l, a, b) {
  let temp = l[a];
  l[a] = l[b];
  l[b] = temp;
}

function partitionlist(l, left, right) {
  let t = parseInt((left + right) / 2);
  //console.log(t);
  let pivot = l[t];
  let i = left,
    j = right;
  while (i < j) {
    while (l[i] <= pivot) {
      i++;
    }
    while (l[j] > pivot) {
      j--;
    }
    if (i < j) {
      swap(l, i, j);
    }
  }
  swap(l, left, j);
  return j;
}
function quicksort(l, left, right) {
  if (left < right) {
    let loc = partitionlist(l, left, right);
    //console.log(loc);
    quicksort(l, left, loc);
    quicksort(l, loc + 1, right);
  }
}
let l = [3, 9, 1, 2, 5, 7, 8];

let left = 0;
let right = l.length - 1;
quicksort(l, left, right);
console.log(l);
//console.log(l[right]);

//
