const JACARE_CONTAINER = document.querySelector('#jacare-container');
const JACARE_NAME_CONTAINER = document.querySelector('#jacare-name');

let currentJacare = [2, 1, 0];
let randomizableSlots = new Array(currentJacare.length);

const getFacingDirection = (current, next, previous) => next === null || current > previous ? 'left' : 'right';

const getPartName = (num, format = false) => num === 0 ? 'ja' : num === 1 ? 'ca' : format ? 'ré' : 're';

const render = (jacare, slots) => {
  currentJacare = jacare;
  randomizableSlots = slots;
  JACARE_NAME_CONTAINER.innerHTML = jacare.map(it => getPartName(it, true)).join('');
  JACARE_CONTAINER.innerHTML = jacare.map((value, index, array) => {
    let previous = value === 0 ? null : array[index-1];
    let next = value === array.length-1 ? null : array[index+1];

    return createJacareDom(getPartName(value), randomizableSlots.includes(index), getFacingDirection(value, previous, next));
  }).join('\n');
};

const createJacareDom = (part, locked, facing) => 
`<div class="jacare-part${facing === 'right' ? ' facing-right' : ''}">
    <img src="assets/${part}.png"/>
</div>`;