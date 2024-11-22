// function validBraces(braces) {
//   let tracer = [];
//   for (let i = 0; i < braces.length; i++) {
//     if (braces[i] === "(" || braces[i] === "{" || braces[i] === "[") {
//       tracer.push(braces[i]);
//     } else {
//       if (tracer.length === 0) return false;
//       let lastValue = tracer[tracer.length - 1];
//       if (
//         (braces[i] === "]" && lastValue === "[") ||
//         (braces[i] === "}" && lastValue === "{") ||
//         (braces[i] === ")" && braces[i] === "(")
//       ) {
//         tracer.pop();
//       } else {
//         break;
//       }
//     }
//   }
//   return tracer.length === 0;
// }
// console.log(validBraces("())))"));

function validBraces(braces) {
  while (
    braces.indexOf("{}") !== -1 ||
    braces.indexOf("()") !== -1 ||
    braces.indexOf("[]") !== -1
  ) {
    braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
  }
  return braces.length === 0 ? true : false;
}
console.log(validBraces("())))"));
