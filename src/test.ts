import { values } from './index';

const v = new values([1, 2, 3, 4]);
console.log(v.sum(2).concat(v.sum(3)).max().avg());