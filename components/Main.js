import {
  CreateElement
} from './Utils/CreateElement.js';

export const Main = () => {
  let nums = [];
  for(let i = 1; i <= 100; i++){
    nums.push(i);
  }
  return CreateElement('main', {
    className: 'main',
    children: nums.map(num => CreateElement('p', {
        textContent: `This is paragraph number ${num}`
      }))
  });
};