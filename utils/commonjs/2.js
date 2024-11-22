console.log(arguments, 'arguments')
console.log(module.exports === exports, this === exports)
this.a = 1;
exports.b = 2;
exports = {
  c: 3
}
module.exports = {
  d: 4
}
exports.e = 5;
this.f = 6
console.log(this, 'this')
console.log(exports, 'exports')
console.log(module.exports, 'module.exports')
