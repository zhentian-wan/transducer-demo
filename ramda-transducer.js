var t = require("transducers-js");
var R = require("ramda");

const timeIt = (label, fn) => {
    console.time(label);
    fn();
    console.timeEnd(label);
};

const headerStr = `hostname, username `;
const contentStr = `
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
    10.1.10.1, zwan
    10.1.11.1, wan
`;
const keyValPair = R.useWith(
    R.map, [
        R.zipObj,
        R.identity
    ]
);
/**
 * Working with Ramda.js
 */
const fn1 = () => {
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
    const header = stringToArray(headerStr);
    const content = transformContent(contentStr);

    return keyValPair(header, content);
}


/**
 * Working with transducer-js + Rmada.js
 */
const fn2 = () => {
    const stringToArr = R.compose(
        t.comp(
            t.map(R.trim),
            t.filter(Boolean)
        ),
        R.split(',')
    );
    const transformCnt = R.compose(
        t.comp(
            t.map(stringToArr),
            t.filter(Boolean)
        ),
        R.split('\n')
    );
    const h = stringToArr(headerStr);
    const c = transformCnt(contentStr);
    return keyValPair(h, c);
}


timeIt('transducer', fn2) //1.732ms
timeIt('Ramda only', fn1) // 7.410ms
