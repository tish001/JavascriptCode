function replaceAt(index, replacement, st) {
  return (
    st.substr(0, index) + replacement + st.substr(index + replacement.length)
  );
}
function occurrence(st) {
  var oc = [];
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
        //  console.log(st);
        }
      }

      oc.push({ key: x, value: count });
    }
  }

  console.log(oc);
}
occurrence("google.com");
