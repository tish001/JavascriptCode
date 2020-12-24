let a = "abc$d.e@f";
let c = a.split("");
let schar = ["@", "$", "."];
//console.log(c);
let i;
j = c.length - 1;
// if (!(c[1] in schar)) {
//   console.log(c[1]);
//   console.log(c[7]);
// }
// if (schar.includes(c[7])) {
//   console.log(c[1]);
//   console.log(c[7]);
// }
// if (!schar.includes(c[0]) && schar.includes(c[8])) {
//   console.log(c[1]);
//   console.log(c[7]);
// }
function isAvailable(value, schar) {
  for (let r = 0; r < schar.length; r++) {
    if (value == schar[r]) {
      return true;
    }
  }
}
for (i = 0; i !== j; i++) {
  //   console.log(c[i]);
  //   console.log(c[j]);
  if (!isAvailable(c[i], schar) && !isAvailable(c[j], schar)) {
    let temp = c[i];
    c[i] = c[j];
    c[j] = temp;

    //  console.log("op");
  } else {
    //console.log("no");
    i--;
  }
  j--;
}
//console.log(c);
let result = c.join("");
console.log(result);
