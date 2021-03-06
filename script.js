//loops and arrays part 3

//Challenge: Build a pac-man board. A pacman board is a board 18 x 18 squares large that has squares 
//coloured based on if there is a wall in the square, a power-pellet in the square, a pac-dot in the
//square, pac-man himself, or the four ghosts, inky, blinky, pinky and clyde. Based on the game //board example, and what you have learned about if statements and adding classes in javascript, I //would like you to create your own pac-man board. Be as creative with the maze as you like.

//I have gone ahead an added 324 squares for you in the html and made an array for you to work //with.

//please dont forget to share your code on the #share-your--code channel on discord.

const squares = Array.from(document.querySelectorAll('.grid div'))

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,3,1,2,2,2,1,1,1,1,1,1,2,2,2,2,3,1,
    1,2,2,2,1,2,2,2,2,2,2,2,2,1,1,1,2,1,
    1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,
    1,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2,1,
    1,1,1,1,2,1,1,1,0,0,1,1,1,2,1,1,1,1,
    1,1,2,1,2,1,1,5,0,0,7,1,1,2,1,2,1,1,
    1,1,2,2,2,1,1,6,0,0,8,1,1,2,2,2,1,1,
    1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,
    2,2,2,2,2,2,2,2,2,4,2,2,2,2,2,2,2,2,
    1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,
    1,2,2,2,2,2,2,1,1,2,1,2,2,2,2,2,2,1,
    1,2,1,2,1,1,2,1,1,2,1,1,2,1,1,1,2,1,
    1,2,1,2,1,1,2,1,1,2,2,2,2,1,2,1,2,1,
    1,2,1,2,1,1,2,1,1,2,1,1,2,1,2,1,2,1,
    1,2,1,2,1,1,2,1,1,2,1,1,1,1,2,1,2,1,
    1,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]
