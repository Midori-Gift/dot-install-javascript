'use strict';

{

  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

  // targetNode.className = 'my-color my-border';
   // targetNode.classList.add('my-color');
  //  if (targetNode.classList.contains('my-color') === true) {
  //    targetNode.classList.remove('my-color');
  //   } else {
  //     targetNode.classList.add('my-color');
  //   }

  // 上の処理を1行でしてくれる万能ちゃん！
  targetNode.classList.toggle('my-color'); //指定要素のON/OFFをしてくれる
    });
}
