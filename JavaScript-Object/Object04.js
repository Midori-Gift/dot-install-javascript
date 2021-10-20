'use strict';

{
  const scores = [80, 90, 40, 40, 50, 60];
  scores.shift(); //要素の最新を取り出し削除
  //80, 90, 40, 40, 50
for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);
  }
}