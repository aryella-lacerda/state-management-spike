import {atom} from 'recoil';

export const counterState = atom({
  key: 'counter',
  default: 0,
});

export const skipState = atom({
  key: 'skip',
  default: 1,
});
