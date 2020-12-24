function convert(arr, merge_array, l) {
  let newarr = [];
  //console.log(arr);
  for (let i = 0; i < l; i++) {
    if (arr[i] === 1) {
      arr[i] = merge_array[i];
      newarr.push(arr[i]);
    }
  }
  let len = newarr.length;
  if (parseInt(len % 2) === 0 && b.includes(newarr[len - 1])) {
    let flag = true;
    for (let k = 0; k < newarr.length; k++) {
      if (k % 2 == 0) {
        if (a.includes(newarr[k])) {
        } else {
          flag = false;
          break;
        }
      } else {
        if (b.includes(newarr[k])) {
        } else {
          flag = false;
          break;
        }
      }
    }

    // console.log(newarr);

    if (flag) {
      console.log(newarr);
    }
  }
}
function binary(merge_array, l) {
  let r;
  let i;
  let newl = Math.pow(2, l);

  //console.log(newa);

  for (let j = 0; j < newl; j++) {
    let n = j;
    //  console.log(n);

    let arr = [];
    for (i = 0; i < l; i++) {
      r = n % 2;

      arr.push(r);

      n = parseInt(n / 2);
      //  console.log(count);
      //console.log(arr);
    }
    // console.log(arr);
    convert(arr, merge_array, arr.length);
  }
}

let a = [10, 15, 25, 40];
let b = [1, 5, 20, 30, 45];
let merge_array = [a.length + b.length];
let i = 0,
  j = 0,
  k = 0;
let l1 = a.length + b.length;
while (i < a.length && j < b.length)
  merge_array[k++] = a[i] < b[j] ? a[i++] : b[j++];

while (i < a.length) merge_array[k++] = a[i++];

while (j < b.length) merge_array[k++] = b[j++];
binary(merge_array, l1);
