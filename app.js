var myQuestion= [
    {
        question:'HTML stands for?',
       
        option: ['Hyper Text Markup Language','High Text Markup Language','Hyper Tabular Markup Language'] ,
        answer: 'Hyper Text Markup Language',
    },
    {
        question:'which of the following tag is used to mark a begining of paragraph ?',
      
        option: ['td','br','p'],
        answer: 'p',
    },
    {
        question:'From which tag descriptive list starts ?',
       
        option: ['LL','DD','DL'],
        answer: 'DL',
    },
    {
        question:'Correct HTML tag for the largest heading is',
      
        option: ['head','h1','h6'],
        answer: 'h1',
    },
];

var questionCount = 0;
var score = 0;

function showQuestion(e){

    // show Question
    
    var questionElement=document.getElementById('questionElement');
    questionElement.innerHTML = myQuestion[e].question;
    
    // show option

    var optionElement = document.getElementsByClassName("optionElement");
    for(var i=0;  i<optionElement.length; i++){
        optionElement[i].innerHTML = myQuestion[e].option[i]
    }  
}



function nextQuestion(){
    questionCount++;
    showQuestion(questionCount)
    validate(questionCount)
   
    removeActiveClass()
   
}

function putActiveClass(e){
    
    removeActiveClass()
    e.classList.add("active")
}

function removeActiveClass(){
    var active = document.getElementsByClassName('active')
    for(var i=0; i<active.length; i++){
        active[i].classList.remove('active')
    }
}

function validate(e){
    var userAns = document.getElementsByClassName('active')  
    for(var i=0; i<userAns.length; i++){
    if(userAns[i].children[i].innerHTML === myQuestion[e].answer){
    return (score += 10)
        }
        console.log(score)

    } 
}



















