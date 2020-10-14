var userName = prompt('Where city did you move from!?:')

alert('Wow, ' + userName + '? Really? Sorry.');

if(userName == 'Los Angeles'){
    document.write('Information for individuals who have recently moved from ' + userName + ' to Seattle. Please remember; pedestrians have right-of-way at crosswalks.')
} else if(userName == 'Dallas') {
    document.write('Welcome to Seattle pardner! Good luck finding parking spaces for that Cadillac.')
} else if(userName == 'New York City') {
    document.write('Welcome to Seattle! Better get used to drinking your coffee black.')
} else if(userName == 'Paris') {
    document.write('Bienvenue à Seattle! Notre pain est assez acceptable.')
} else {
    document.write('Welcome, individual from ' + userName + '! You can throw your umbrella away now.')
}