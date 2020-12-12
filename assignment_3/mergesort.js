function merge(a, l, m, r) {
  // console.log(l);
  let sorted_a = [];

  let i = l,
    j = m + 1,
    k = l;
  while (i <= m && j <= r) {
    if (a[i] <= a[j]) {
      sorted_a[k] = a[i];
      i++;
      k++;
    } else {
      sorted_a[k] = a[j];
      j++;
      k++;
    }
  }

  //r = sorted_a.length;
  //console.log(r);
  while (i <= m) {
    sorted_a[k] = a[i];
    i++;
    k++;
  }
  //   for (; i <= m; i++) {
  //     sorted_a[k] = a[i];
  //     k++;
  //   }
  //   for (; j <= r; j++) {
  //     sorted_a[k] = a[j];
  //     k++;
  //   }
  while (j <= r) {
    sorted_a[k] = a[j];
    j++;
    k++;
  }
  console.log("sorted:" + sorted_a);
  var n;
  for (n = l; n <= r; n++) {
    a[n] = sorted_a[n];
  }
}

function mergesort(a, left, right) {
  // console.log(a);
  if (left < right) {
    let mid = parseInt((left + right) / 2);
    // console.log("without let"+mid);
    mergesort(a, left, mid);
    mergesort(a, mid + 1, right);
    merge(a, left, mid, right);
  }
}

let a = [3, 7, 5, 9, 6, 8];
//console.log(a);
let left = 0;
let right = a.length - 1;
//console.log(right);
mergesort(a, left, right);
console.log(a);
