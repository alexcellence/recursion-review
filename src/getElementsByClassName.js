// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //result array
  var classNames = [];
  //check if element has class names && if it has specific class name
  var classFinder = function(element) {
    //if both are true push element into result array
    if (element.classList && element.classList.contains(className)) {
      classNames.push(element);
    }
    //if element has children, run helper function again
    if (element.children) {
      for (var i = 0; i < element.children.length; i++) {
        classFinder(element.children[i]);
      }
    }
  };
  classFinder(document.body);
  //return result array
  return classNames;
};
