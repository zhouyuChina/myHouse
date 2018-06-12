import '../../css/common.css';

import { lineObject } from './components/threeLine.js';

const line = new lineObject;

// line.buildModel2();

// line.buildModel3();

// line.renderScene();



function fn1() {
  let n = 999;
  let add = function () {
    n += 1;
  }
  function fn2() {
    add();
    console.log(n);
  }
  return fn2;
}

let objFn1 = fn1();

objFn1();
objFn1();
objFn1();
objFn1();
objFn1();
objFn1();