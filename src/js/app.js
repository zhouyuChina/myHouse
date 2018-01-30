import './../css/common.css';
import './../css/index.less';

const testBable = "测试Es6能否执行";

console.log('testBable', testBable);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

const testClass = new Point(2, 3);

const result = testClass.toString();

console.log('result测试Es6Class类', result);

// 测试箭头函数

const arrawFun = () => {
  console.log("这里测试Es6的箭头函数");
}

arrawFun();
