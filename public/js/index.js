//click here button
document.querySelector('#click_here').addEventListener('click', () => {
    const value = parseInt(prompt('What\'s your year of birth'))
    const now = new Date().getFullYear()
    const result = (now - value) * 365
    const textNode = document.createTextNode(`Your age in days is ${result} days`)
    const h4 = document.createElement('h4')
    h4.setAttribute('id', 'ageResult')
    h4.appendChild(textNode)
    document.querySelector('#flex-box-container-1-result').appendChild(h4)
   //document.querySelector('#result').innerHTML = `Your age in days is ${result} days`
})
//Reset button
document.querySelector('#reset_days').addEventListener('click', () => {
    document.querySelector('#ageResult').remove()
})
console.log('hello')


//Challenge 2
const generateCat = () => {
    const img = document.createElement('img')
    img.setAttribute('src', 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small')
    document.querySelector('.flex-box-container-2').appendChild(img)
    
}

//Challenge 3; Rock Paper Scissors
function rpsGame(yourChoice){
    
    const humanChoice = yourChoice.id    
    const botChoice = botRandomchoice()   
    const results = result(humanChoice,botChoice)    
    const message = finalMessage(results)
    rspFrontEnd(humanChoice, botChoice, message)
}

const botRandomchoice = () => {
    const random = Math.round(Math.random() * 2)
    const possibleOutcome = ['rock', 'paper', 'scissors']
    const outcome = possibleOutcome[random]
    return outcome
}


const result = (humanChoice, botChoice) => {
    const rpsDatabase = {
        'paper': {'scissors': 0, 'paper': 0.5, 'rock': 1 },
        'rock': {'paper': 0, 'rock': 0.5, 'scissors': 1 },
        'scissors': {'rock': 0, 'scissors': 0.5, 'paper': 1 }
    }
    const yourScore = rpsDatabase[humanChoice][botChoice]
    const botScore = rpsDatabase[botChoice][humanChoice]

    return [yourScore, botScore]
}

//Final message

const finalMessage = ([yourScore, botScore]) => {
    if(yourScore === 0){
        return {'message': 'You lost!', 'color': 'red'}
    } else if(yourScore === 0.5){
        return {'message': 'You tied!!', 'color': 'yellow'}
    }else{ return {'message': 'You won!!!', 'color': 'green'}
    }
    
}

const rspFrontEnd = (humanChoice, botChoice, finalMessage) => {
    let imageDatabase = {
        'rock': document.querySelector('#rock').src,
        'paper': document.querySelector('#paper').src,
        'scissors': document.querySelector('#scissors').src
    }

    const rock = document.querySelector('#rock')
    const paper = document.querySelector('#paper')
    const scissors = document.querySelector('#scissors')
    rock.remove()
    paper.remove()
    scissors.remove()

    const flexBoxContainer = document.querySelector('#flex-box-container-3-div')
    
    const humanDiv = document.createElement('div')
    const textDiv = document.createElement('div')
    const botDiv = document.createElement('div')

    const humanChoiceImg = document.createElement('img')
    const botChoiceImg = document.createElement('img')

    humanChoiceImg.src = imageDatabase[humanChoice]
    humanDiv.appendChild(humanChoiceImg)
    flexBoxContainer.appendChild(humanDiv)
    humanDiv.setAttribute('class', 'human-div')
    
    
    const textNode = document.createTextNode(finalMessage['message'])
    const h1 = document.createElement('h1')
    h1.appendChild(textNode)
    h1.style.color = finalMessage['color']
    textDiv.appendChild(h1)
    flexBoxContainer.appendChild(textDiv)
    textDiv.setAttribute('class', 'text-div')
    
    
    botChoiceImg.src = imageDatabase[botChoice]
    botDiv.appendChild(botChoiceImg)
    flexBoxContainer.appendChild(botDiv)
    botDiv.setAttribute('class', 'bot-div')
}


//Challenge 6: Change all button color

const all_button = document.getElementsByTagName('button')
let copyOriginalColor = []

for(let i = 0; i< all_button.length; i++){
    copyOriginalColor.push(all_button[i].classList[1])
}

console.log(copyOriginalColor)
function changeColor(button){
    if(button.value === 'red'){
        buttonRed()
    }else if(button.value === 'green'){
        buttonGreen()
    }else if(button.value === 'reset'){
        buttonReset()
    }else if(button.value === 'random'){
        buttonRandom()
    }
}
function buttonRed() {
    for(let i = 0; i< all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]) 
        all_button[i].classList.add('btn-danger')
    }
}
function buttonGreen() {
    for(let i = 0; i< all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]) 
        all_button[i].classList.add('btn-success')
    }
}
function buttonReset() {
    for(let i = 0; i< all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]) 
        all_button[i].classList.add(copyOriginalColor[i])
    }
}

function buttonRandom() {
    for(let i = 0; i< all_button.length; i++){
        let random = Math.round(Math.random() * 6)
        all_button[i].classList.remove(all_button[i].classList[1]) 
        all_button[i].classList.add(copyOriginalColor[random])
        console.log(random)
    }
}










