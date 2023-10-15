
const dataElements = document.querySelectorAll('.data');
let currentDate = new Date('October 9, 2023'); // 设置起始日期

dataElements.forEach(element => {
    element.textContent = currentDate.toLocaleString('en-us', { month: 'short', day: 'numeric' }); // 将日期格式化为 "Oct 10" 格式
    currentDate.setDate(currentDate.getDate() + 1); // 日期递增
});