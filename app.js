// question and answer node list
const faqList = document.querySelectorAll('.question');
const answerList = document.querySelectorAll('.answer-paragraph');

faqList.forEach((question, i) => {
    question.addEventListener('click', () => {
        let iOf = 0;
        let activeI = 0;
        let permission = true;

        for (const questionOf of faqList) {
            if (questionOf.classList.contains('active-q')) {
                questionOf.classList.toggle('active-q');
                answerList[iOf].classList.toggle('active-a');
                activeI = iOf;
                permission = false;
            }
            iOf++;
        }

        if (activeI !== i || permission) {
            question.classList.toggle('active-q');
            answerList[i].classList.toggle('active-a');
        }
    });
});
