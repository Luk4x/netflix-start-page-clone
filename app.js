const faqList = document.querySelectorAll('.question');
const answerList = document.querySelectorAll('.answer-paragraph');

faqList.forEach((question, i) => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        answerList[i].classList.toggle('active');
    });
});
