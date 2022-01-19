console.log(false || (true && false));  //false 
console.log(true || (11 + 12));         //true
console.log((31 + 22) || true);         //53
console.log(true && (1 + 7));           //8
console.log(false && (3 + 4));          //false
console.log((1 + 2) && true);           //true
console.log((32 * 4) >= 129);           //false
console.log(false !== !true);           //false
console.log(true === 4);                //false
console.log(false === (847 === '847'));  //true
console.log(false === (887 == '887'));   //false
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);  //true