let str = "the lyrics is not that poor!";
var pos = str.search("not");
var pos1 = str.search("poor");
if (pos == -1 || (pos != -1 && pos1 == -1)) {
  console.log(str);
} else {
  let o = "poor";
  let len = o.length;
  let t = str.slice(pos, pos1 + len);
  let p = str.replace(t, "good");

  //console.log(pos);
  //console.log(pos1);
  //console.log(t);
  //console.log(len);
  console.log(p);
}
