// console.log(process.env)
console.log(process.env.NODE_ENV, process.env.PACK_ENV);
let host = process.env.NODE_ENV === 'prod' ? 'prod' : 'dev';

// exports & require CommonJS
// exprot  & import  ES6

import m from './module';
import { a, c, a as b } from './module';

console.log(m, a, b, c);
