
const PmpButton = document.getElementById('PmpTimetable');
const StudyandResearchButton = document.getElementById('StudyandresearchPlan');
const mainContent = document.querySelector('main');
const headtext = document.querySelector('.nav-right');
const mainContent2 = document.querySelector('main2');
// 添加点击事件监听器
    PmpButton.addEventListener('click', function () {
    // 显示主要内容
    console.log(headtext.textContent);
    mainContent.style.display = 'block';
        mainContent2.style.display = 'none';
        headtext.textContent ='PMP Timetable'
        //nav-right
});

StudyandResearchButton.addEventListener('click', function () {
    // 隐藏主要内容
    headtext.textContent = 'Study & Research Plan'
    // headtext.style.fontSize='24px';
    mainContent.style.display = 'none';
    mainContent2.style.display = 'block';
    

});