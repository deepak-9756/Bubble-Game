var timmer = 60;
var score = 0;
var rn = 0;
var hit = document.querySelector('#hitVale')

function increaseScore()
{
    score += 10

    document.querySelector("#score").textContent=score
}

function makeBoubble(){
    var clutter =""
    for(var i=1;i<=147;i++)
    {
        let number = Math.floor(Math.random()*10)
        clutter+=`<div class="boubble">${number}</div>`;
    }
    document.querySelector('#pbtm').innerHTML=clutter;
    
}

function runTimmer(){
    var timmerInterval=setInterval(function(){
        if(timmer>0)
            {timmer--;
            document.querySelector("#timmerValue")
            timmerValue.textContent=timmer;}
            else
            {
                clearInterval(timmerInterval)
                document.querySelector('#pbtm').innerHTML = "<h1>Game Over : Your Score is--</h1> <h1>"+score+"</h1>"
            }       
    },1000)
}

function newHit(){
    rn=Math.floor(Math.random()*10)
    document.querySelector("#hitVale").textContent = rn
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    if(hit.textContent == details.target.textContent){
        increaseScore()
        newHit()
        makeBoubble()
    }

})

newHit()
runTimmer()
makeBoubble()


