'use strict';

function centerBar() {
  console.log('--------');
}

function showAd(message = 'Ad') {
console.log('===');
console.log('---');
console.log(`---${message}----`); //テンプレートリテラル！！
console.log('---');
console.log('777');
}

console.log('個々からメソッド');

showAd('header Ad');
centerBar();
showAd('AD');
showAd();
centerBar();
showAd('footer Ad');

