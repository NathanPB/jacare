const JACARE_CONTAINER = document.querySelector('#jacare-container');

let currentJacare = [0, 1, 2];

const randomize = (initialJacare, ...slots) => {
  let jacare = initialJacare ? initialJacare : currentJacare;

  return jacare.map((val, index) => {
    return slots.includes(index) ? Math.floor(Math.random() * jacare.length) : val
  })
};


const getFacingDirection = (current, next, previous) => next === null || current > previous ? 'left' : 'right';

const render = (jacare) => {
  JACARE_CONTAINER.innerHTML = jacare.map((value, index, array) => {
    let src = value === 0 ? 'ja' : value === 1 ? 'ca' : 're';
    let previous = value === 0 ? null : array[index-1];
    let next = value === array.length-1 ? null : array[index+1];
    let facingDirection = getFacingDirection(value, previous, next);
    
    return `<img class="${facingDirection === 'right' ? 'facing-right ' : ''}p-0 m-0 jacare-part ${src}" src="assets/${src}.png"/>`;
  }).join('\n');
};