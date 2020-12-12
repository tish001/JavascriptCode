function sorting_alpha(list) {
  // console.log(list);
  let i, j, flag;

  for (i = 0; i < list.length; i++) {
    flag = true;
    for (j = 1; j < list.length - i; j++) {
      if (list[j - 1] > list[j]) {
        var temp = list[j - 1];
        list[j - 1] = list[j];
        list[j] = temp;
        flag = false;
      }
    }
    if (flag == true) {
      break;
    }
  }
}

function remove_duplicate(l) {
  let l1 = [];
  console.log(l);
  let i, j, flag;
  for (i = 0; i < l.length; i++) {
    flag = true;
    for (j = 0; j < l1.length; j++) {
      if (l[i] == l1[j]) {
        flag = false;
        break;
      }
    }
    if (flag == true) {
      l1.push(l[i]);
    }
  }

  // console.log(l1);
  sorting_alpha(l1);
  console.log(l1);
}
remove_duplicate(["red", "white", "black", "red", "green", "black"]);
