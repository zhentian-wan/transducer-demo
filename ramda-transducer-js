var t = require("transducers-js");
var R = require("ramda");

const headerStr = `hostname, username `;
const contentStr = `
    10.1.10.1, zwan
    10.1.11.1, wan

`;

/**
 * Working with Ramda.js
 */
const stringToArray = R.compose(
    R.map(R.trim),
    R.filter(Boolean),
    R.split(',')
);
const transformContent = R.compose(
    R.map(stringToArray),
    R.filter(Boolean),
    R.split('\n')
);
const keyValPair = R.useWith(
    R.map, [
        R.zipObj,
        R.identity
    ]
);

const header = stringToArray(headerStr);
const content = transformContent(contentStr);

const res = keyValPair(header, content);
console.log(res);

/**
 * Working with transducer-js + Rmada.js
 */

const stringToArr = R.compose(
    t.comp(
        t.map(R.trim),
        t.filter(R.isNil)
    ),
    R.split(',')
);
const transformCnt = R.compose(
    t.comp(
        t.map(stringToArr),
        t.filter(R.isNil)
    ),
    R.split('\n')
);
const h = stringToArr(headerStr);
const c = transformCnt(contentStr);
const res2 = keyValPair(h, c);
console.log("res2", res);
