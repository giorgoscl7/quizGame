const username = prompt("Enter your username:")
  
  
  const question = [
`What is the capital of Japan?
a. Seoul
b. Tokyo 
c. Beijing
d. Bangkok`,
`What is 5 × 6?
a. 28
b. 30
c. 32
d. 35`,
`Which planet is known as the Red Planet?
a. Venus
b. Mars 
c. Jupiter
d. Mercury`,
`What is the largest mammal?
a. African Elephant
b. Blue Whale 
c. Giraffe
d. Great White Shark`,
`Which language is primarily spoken in Brazil?
a. Spanish
b. Portuguese 
c. French
d. Italian`,
`How many continents are there?
a. 5
b. 6
c. 7 
d. 8`,
`What is the freezing point of water?
a. 0°C 
b. 10°C
c. -10°C
d. 100°C`,
`Which organ is responsible for pumping blood in the human body?
a. Liver
b. Lungs
c. Heart 
d. Brain`,
`What is the square root of 81?
a. 7
b. 8
c. 9 
d. 10`,
`What is the chemical symbol for water?
a. O2
b. H2O 
c. CO2
d. HO2`,
`Which programing language can work either on Frontend or Backend side.
a. Java
b. JavaScript
c. Python
d. PHP`
]
const answers = [
`b`,
`b`,
`b`,
`b`,
`b`,
`c`,
`a`,
`c`,
`c`,
`c`,
`b`,
`b`
]
let indexQuestion = 0;
let points = 0;
let time =60;

function startQuiz() {
    displayQuestion();
    startTimer();
}
function displayQuestion() {
const question = question [indexQuestion];
document.getElementById('question').textContent= question;
const options = document.querySelectorAll('.answer-option');
    options.forEach((option, index) => {
        option.textContent = question.options[index];
});
