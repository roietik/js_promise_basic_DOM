'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(() => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message';
    messageDiv.textContent = 'Promise was resolved!';
    document.body.appendChild(messageDiv);
  })
  .catch((error) => {
    throw error;
  });
