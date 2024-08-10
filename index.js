//initial 'global' variables
let num_guesses = 1
let actual = Math.floor(Math.random()*100)
let guesses_list = []

// document.querySelector('#guess').focus()

const play = () => {
    
    //global variables get reset upon new game starting
    guesses_list = []
    num_guesses = 1
    actual = Math.floor(Math.random()*100)

    console.log(`Secret: number is ${actual} shhh!`)

    //reseting DOM elements to proper new game and fousing on input
    document.querySelector('#submit').removeAttribute('hidden')
    document.getElementById('hint').innerHTML='';
    document.querySelector('#play_again').setAttribute('style','display:"none"')
    document.querySelector('#submit').removeAttribute('disabled')
    document.querySelector('#guess').removeAttribute('disabled')
    document.querySelector('#guess').focus()
}

const getInfo = (e) =>{

    if (validate_input()) {

        let guess = Number(document.getElementById('guess').value);
        if (guess > actual){
    
            document.getElementById('hint').innerHTML=`LOWER than ${guess}!`;
            document.querySelector('#guess').value=''
            num_guesses +=1;
            guesses_list.push(guess)
        
        }
        if (guess < actual){
    
            document.getElementById('hint').innerHTML=`HIGHER than ${guess}!`;
            document.querySelector('#guess').value=''
            num_guesses +=1;
            guesses_list.push(guess)
        }
        if (guess === actual){
    
            
            document.querySelector('#submit').setAttribute('disabled',true)
            document.querySelector('#guess').value=''
            document.querySelector('#guess').setAttribute('disabled', true)
            if (num_guesses >1){
                let hint = document.getElementById('hint')
                hint.innerHTML=`YOU GOT IT! <br> TOOK YOU ${num_guesses} GUESSES : `
                for (const guess of guesses_list) {
                    hint.innerHTML += `${guess} &#8680  `
                }

                hint.innerHTML += ` ${guess}`

            }
            else {
                document.getElementById('hint').innerHTML=`YOU SHOULD PLAY THE LOTTO, TOO LUCKY!`
            }
            document.querySelector('#submit').setAttribute('hidden','')
            document.getElementById('play_again').setAttribute('style','display:inline')
    
            return 0;
        }
        document.querySelector('#guess').focus()
        

    }

    else {
        document.querySelector('#hint').innerHTML = 'Invalid input, try again!'
        document.querySelector('#guess').focus();
        document.querySelector('#guess').value = ''
    }

}

// check for invalid inputs like strings or higher than 100, lower than 0
const validate_input = () => {
    guess = document.querySelector('#guess').value
    if ( isNaN(guess) )  return false;
    if ( Number(guess) > 100 || Number(guess) < 0 ) return false;
    
    return true;
}


play()