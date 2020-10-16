
function cityPrompt() {
   var city = prompt('What city did you move from!?:');
   alert('Wow, ' + city + '? Really? Sorry.');
   return city;
}


function greeting(city) {
    if(city == 'Los Angeles'){
        document.write('Information for individuals who have recently moved from ' + city + ' to Seattle. Please remember; pedestrians have right-of-way at crosswalks.')
    } else if(city == 'Dallas') {
        document.write('Welcome to Seattle pardner! Good luck finding parking spaces for that Cadillac.')
    } else if(city == 'New York City') {
        document.write('Welcome to Seattle! Better get used to drinking your coffee black.')
    } else if(city == 'Paris') {
        document.write('Bienvenue à Seattle! Notre pain est assez acceptable.')
    } else {
        document.write('Welcome, individual from ' + city + '! You can throw your umbrella away now.')
    }
}

function foodLinks() {
    var userFood1 = prompt ('Please Enter #1 Favorite Food');
    var userFood2 = prompt ('Please Enter #2 Favorite Food');
    var userFood3 = prompt ('Please Enter #6 Favorite Food');

    document.write (
    '<li>' + '<a href="food.jpg">' + userFood1 + '</a>' + '</li>' +
    '<li>' + '<a href="food.jpg">' + userFood2 + '</a>' + '</li>' +
    '<li>' + '<a href="food.jpg">' + userFood3 + '</a>' + '</li>'
    )
}

function guessNeighborhood(){
    var correctAnswer = Tacoma;
    guesses = 3;
    for(var i = guesses; i > 0; i--){
        var userGuess = prompt('Please enter the best Seattle Neighborhood, you have 3 guesses.');
        if(userGuess == correctAnswer){
            alert('Correct!');
            break;
        } else {
            userGuess = alert('Incorrect, please guess again.')
        }
        if (i == 1){
            alert('Sorry. Your guesses were very wrong. The best Seattle Neighborhood is Tacoma.');
        } 
        }
    }