'use strict';

{
  function update() {
    // document.querySelector('h1').textContent = 'changed!';
    // document.querySelector('#target').textContent = 'Changed!';
    // document.getElementById('target').textContent = 'Changed!';

    // document.querySelector('p').textContent = 'changed!';
    // document.querySelectorAll('p')[1,2].textContent = 'changed!';
    document.querySelectorAll('p').forEach((p, index) => {
      p.textContent = `${index}番目のpです！`;
    });
}

setTimeout(update, 1000);
}