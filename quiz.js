const questions=[{
    'que':'Which Language is used println to print ?',
    'a':'Java',
    'b':'C++',
    'c':'Python',
    'd':'C',
    'Correct':'Java'
},
{
    'que':'Which Language is used cout to print ?',
    'a':'C#',
    'b':'C++',
    'c':'Java',
    'd':'C',
    'Correct':'b'
},
{
    'que':'Which Language is used printf to print ?',
    'a':'Python',
    'b':'C++',
    'c':'Swift',
    'd':'C',
    'Correct':'d'
}
]
let index=0;
let save="",correct=0,wrong=0,total=questions.length;
let quesBox=document.getElementById("quesBox");
const options=document.querySelectorAll('.options');

const loadquestion=()=> {
    if(index==total){
        return endquiz();
    }
    reset();
    const data=questions[index];
    quesBox.innerHTML=`${index+1}. ${data.que}`;
    options[0].nextElementSibling.innerHTML=data.a;
    options[1].nextElementSibling.innerHTML=data.b;
    options[2].nextElementSibling.innerHTML=data.c;
    options[3].nextElementSibling.innerHTML=data.d;
}
const reset=()=>{
    options.forEach(
        (Ele)=>{
          Ele.checked=false;
        } )
}
const endquiz=()=>{
    const end=document.getElementById('box');
    end.innerHTML=`
    <h2>ThankYou for Participating</h2>
    <br>
    <h3>Result out of ${total} Questions : </h3>
    <h3>Correct Answers ${correct} Wrong Answers ${wrong}</h3>`;
}
const submitquiz=()=>{
    const data=questions[index];
    let ans=getans();
    console.log(ans);
    if(ans!=''){
    if(ans==data.Correct){
        correct++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}
 
}
const getans=()=>{
    options.forEach(
        (Ele)=>{
           if(Ele.checked){
             save=Ele.value; } } )
    return save;
}
// initial call
loadquestion();
