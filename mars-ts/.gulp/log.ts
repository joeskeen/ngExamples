export var log: typeof console.log = function() {
  console.log.apply(console, arguments);
}