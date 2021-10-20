'use strict';

{

  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

     targetNode.textContent = 'changed!';
     targetNode.title = 'this is title';
     targetNode.style.color = 'red';
     targetNode.style.backgroundColor = 'skyblue';
    });
}
