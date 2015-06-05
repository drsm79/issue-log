var editor = require('editor');

function shorten(string){
  var arr = string.split(' ');
  var pieces = arr.slice(0, 4);
  console.log(pieces);

}
exports.open = function(args){
  console.log('open', args._.slice(1), args.m)
  console.log(shorten(args.m));
  // editor('beep.json', function (code, sig) {
  //   console.log('finished editing with code ' + code);
  // });
};
