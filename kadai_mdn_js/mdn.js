function todaysDate(){ //todaysDate関数

const today = new Date(); //Dateクラス

const year = today.getFullYear(); //年
const month = today.getMonth() + 1; //月
const date = today.getDate(); //日

console.log(year + '年' + month + '月' + date + '日'); //コンソールに出力
}

todaysDate(); //呼び出し
