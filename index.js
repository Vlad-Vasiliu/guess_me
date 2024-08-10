let num_guesses = 1
let actual = Math.floor(Math.random()*100)
const play = () => {

    num_guesses = 1
    actual = Math.floor(Math.random()*100)
    console.log(actual)
    document.getElementById('hint').innerHTML='';
    document.querySelector('#play_again').setAttribute('style','display:"none"')
    document.querySelector('#submit').removeAttribute('disabled')
    document.querySelector('#guess').removeAttribute('disabled')
}

const getInfo = (e) =>{
    let guess = Number(document.getElementById('guess').value);
    if (guess > actual){

        document.getElementById('hint').innerHTML=`LOWER than ${guess}!`;
        document.querySelector('#guess').value=''
        num_guesses +=1;
    }
    if (guess < actual){

        document.getElementById('hint').innerHTML=`HIGHER than ${guess}!`;
        document.querySelector('#guess').value=''
        num_guesses +=1;
    }
    if (guess === actual){

        document.querySelector('#submit').setAttribute('disabled',true)
        document.querySelector('#guess').value=''
        document.querySelector('#guess').setAttribute('disabled', true)
        if (num_guesses >1){
            document.getElementById('hint').innerHTML=`YOU GOT IT! TOOK YOU ${num_guesses} GUESSES`
        }
        else {
            document.getElementById('hint').innerHTML=`YOU CHEATER! TOOK YOU ONE GUESS ?!`
        }
        document.getElementById('play_again').setAttribute('style','display:inline')
    }

    console.log(guess)
}

play()