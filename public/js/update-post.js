let str = window.location.href;
let idArr = [];
let id = '';
let strTemp = str;

for (let i = 0; i < str.length; i++) {
  let last = strTemp[strTemp.length - 1];
  if (last != '/') {
    idArr.unshift(last);
    strTemp = strTemp.slice(0, -1);
  }
}

id = idArr.join('');