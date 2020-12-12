function replaceAt(index, replacement, st) {
  return (
    st.substr(0, index) + replacement + st.substr(index + replacement.length)
  );
}
function occurrence(st) {
  //  var oc = [];
  let numMap1 = new Map();
  k = 0;
  for (var i = 0; i < st.length; i++) {
    var x = st.charAt(i);
    // console.log(x);
    if (x != "#") {
      count = 0;
      for (j = i; j < st.length; j++) {
        if (x == st.charAt(j)) {
          count++;
          st = replaceAt(j, "#", st);
        }
      }
      // console.log(count);
      // let item = {x : count};
      // oc[k++] = item;
      // oc.push({key : x, value : count});
      numMap1.set(x, count);
    }
  }

  console.log(numMap1);
}
occurrence("google.com");
