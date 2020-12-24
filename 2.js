function swap_element(l1, a, b) {
  var temp = l1[b];
  l1[b] = l1[a];
  l1[a] = temp;
}
function sort_array(l1) {
  //console.log(l);
  var i, j, flag;
  for (i = 0; i < l1.length; i++) {
    flag = true;
    for (j = 1; j < l1.length - i; j++) {
      if (l1[j] < l1[j - 1]) {
        swap_element(l1, j, j - 1);
        flag = false;
        // var temp=l[j-1];
        // l[j-1]=l[j];
        // l[j]=temp;
      }
    }
    if (flag == true) {
      break;
    }
  }
  return l1;
}

function check_sum(arr, sum, newa, l) {
  //console.log(newa);
  //console.log(arr);
  let s = 0,
    d = 0,
    t = 0;
  let a = [];

  for (let k = 0; k < l; k++) {
    if (arr[k] == 1) {
      arr[k] = newa[k];
      let r = arr[k];
      a.push(r);
      s = s + r;
    }
  }
  // console.log(s);

  if (s < sum) {
    console.log(a);
    return true;
  }
}

function binary(newa, l, sum) {
  let r;
  let i;
  let newl = Math.pow(2, l);
  let total;
  let v = 0;

  //console.log(newa);

  for (let j = 0; j < newl; j++) {
    let n = j;
    //  console.log(n);

    let arr = [];
    let count = 0;
    for (i = 0; i < l; i++) {
      r = n % 2;

      arr.push(r);
      if (r == 1) {
        count++;
      }
      n = parseInt(n / 2);
    }
    //  console.log(count);
    //  console.log(arr);
    if (count == 3) {
      total = check_sum(arr, sum, newa, l);
      if (total == true) {
        v++;
      }
    }
  }

  console.log(v);
}
//let n = 2;
let newarr = [5, 1, 3, 4, 7];
let newa = sort_array(newarr);
//console.log(newa);
//let newarr = [5, 1, 3, 4, 7];
let l = newa.length;
let sum = 12;

binary(newa, l, sum);
