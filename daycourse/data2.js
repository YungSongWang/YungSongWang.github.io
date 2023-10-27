
const dataElements2 = document.querySelectorAll('.data2');
let currentDate2 = new Date('October 30, 2023'); // 设置起始日期
console.log(dataElements2);
dataElements2.forEach(element => {
    element.textContent = currentDate2.toLocaleString('en-us', { month: 'short', day: 'numeric' }); // 将日期格式化为 "Oct 10" 格式
    currentDate2.setDate(currentDate2.getDate() + 1); // 日期递增
});

