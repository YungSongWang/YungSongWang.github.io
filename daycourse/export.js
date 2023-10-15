const tableCells = document.querySelectorAll('td');

tableCells.forEach(cell => {
    const academicEnglishElements = cell.querySelectorAll('div');
    const aElements = cell.querySelectorAll('a');
    // console.log(academicEnglishElements.length);
    // console.log(academicEnglishElements);
    // console.log(object);
    // console.log( aElements);
    if (academicEnglishElements.length  >= 5) {
        academicEnglishElements[1].classList.add('extra-padding');
    } else {
        // academicEnglishElements[0].classList.remove('extra-padding');
    }
    if (aElements.length>=3){
        aElements[0].classList.add('extra-padding');
    }
});

//wenben
const academicEnglishElements = document.querySelectorAll('.Academic-english');
academicEnglishElements.forEach(element => {
    element.textContent = 'Academic English';
});

const CriticalthinkingElements = document.querySelectorAll('.Critical-thinking');
CriticalthinkingElements.forEach(element => {
    element.textContent = 'Critical Thinking';
});

const StudyresearchskillElements = document.querySelectorAll('.Study-research-skill');
StudyresearchskillElements.forEach(element => {
    element.textContent = 'Study Research';
});

const QuantitativeElements = document.querySelectorAll('.Quantitative');
QuantitativeElements.forEach(element => {
    element.textContent = 'Quantitative';
});
const InterculturalstudiesElements = document.querySelectorAll('.Intercultural-studies');
InterculturalstudiesElements.forEach(element => {
    element.textContent = 'Intercultural Study';
});



