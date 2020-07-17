var plorp = ['fidah', 'yaseer', 'cecil', 'SUBS','nub','nu','t',''];

function tinyFriend(arr) {
  var long1 = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length < long1.length) {
      long1 = arr[i];
    } 
  }
  return long1;
}


console.log(tinyFriend(plorp));