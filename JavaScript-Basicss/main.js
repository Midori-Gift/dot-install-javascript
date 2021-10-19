console.log("main.js!!!");

const signal = 'pink';

switch(signal) {
  case 'red':
    console.log('stop');
    break;
  case 'yellow':
    console.log('Caution!');
    break;
  case 'blue':
  case 'green':
    console.log('Safe');
  break;
  default:
    console.log('???');
    break;
}