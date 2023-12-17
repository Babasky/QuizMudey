var skip = document.querySelector('#skip');
var score = document.querySelector('#score');
var compteur = document.querySelector('#compteur');
var count = 0;
var scoreCount = 0;
var duration = 0;

var questionnaire  = document.querySelectorAll('.questionnaire');
var reponses = document.querySelectorAll('.questionnaire .reponse input');

var step = ()=>{
    count += 1;
    for (let i = 0; i < questionnaire.length; i++) {
        questionnaire[i].className = 'questionnaire';
    }

    questionnaire[count].className = 'questionnaire active';
    if(count == 3){
        skip.style.display = 'none'
        clearInterval(duration);
        compteur = 0
        setTimeout(()=>{
            document.location = 'index.html'

        },5000)
    }
}

skip.onclick = ()=>{
    step();
    duration = 10
}

reponses.forEach((reponse)=>{
    reponse.addEventListener('click', ()=>{
        setTimeout(()=>{
            step();
            duration = 10
        },500);
        var valid = reponse.getAttribute("valid");
        if (valid=="valid") {
            scoreCount += 20
            score.innerHTML = scoreCount
            totalScore.innerHTML = scoreCount
        }else{
            scoreCount -= 20
            score.innerHTML = scoreCount
            totalScore.innerHTML = scoreCount
        }
    })
})

var duration = setInterval(()=>{
    if(duration==10){
        duration = 0;
    }
    duration += 1;
    compteur.innerHTML = duration;

    if(compteur.innerHTML == "10"){
        step()
    }
},1000);

