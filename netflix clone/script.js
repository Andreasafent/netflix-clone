const questions = document.querySelectorAll('.single-question-container');

questions.forEach(question=>{
    //console.log(question);
    const btn = question.querySelector('.question');
    //console.log(btn);

    btn.addEventListener('click', function(){
        questions.forEach(item=>{
            if(item!==question){
                item.classList.remove('show');
            }
        })
        question.classList.toggle('show');
    })
})






/* const btns = document.querySelectorAll('.question');

btns.forEach(btn=>{
    btn.addEventListener('click', e=>{
        const parent=e.currentTarget.parentElement;
        parent.classList.toggle('show');
        e.currentTarget.childNodes[3].childNodes[1].classList.toggle('svg-closed');
    })
}) */
































































/* for(let i=0, len=answerEl.length; i<len; i++){
    if(answerEl[i].classList.contains('show')){
        svg.classList.remove('svg-open');
        svg.classList.add('svg-closed');
    }
    if(!answerEl[i].classList.contains('show')){
        svg.classList.remove('svg-closed');
        svg.classList.add('svg-open');
    }
} */