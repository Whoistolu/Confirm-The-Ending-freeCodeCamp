function confirmEnding(str, target) {
//     if (str.endsWith(target)) {
//         return true;
//     }

//     return false;
//   }
  
//   console.log(confirmEnding("Bastian", "n"));

  /********The code above works*****/

  if (str.substr(-EventTarget.length) === target) {
    return true;
  }

  return false;
}
console.log(confirmEnding("Bastian", "n"));
