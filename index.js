// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  let strToLow = title.toLowerCase();
  
  let arr = strToLow.split(/\s+/g);

  while (arr[0] == "") {
      arr.shift();
  }
 return arr.join("-");
  
  
  
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming
