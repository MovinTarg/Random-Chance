function slot (quarters = 100) {
    var pull = 0;
    var winnings = 0;
    var min = prompt("What is the lowest amount of quarters that you need to walk away with?");
    var max = prompt("How many quarters fo you need to walk away with your winnings?");
    while (quarters >= min) {
        if (quarters >= max) {
            console.log("You now have " + quarters + " quarters. What Luck!");
            break;
        } else if (quarters <= min) {
            console.log("You now have only " + quarters + " quarters. Better luck next time!");
            break;
        }
        quarters --;
        pull = Math.ceil(Math.random()*100);
        if (pull == 100) {
            winnings = Math.floor(Math.random() * 51) + 50;
            quarters += winnings;
            console.log("Congradulations! You won " + winnings + " quarters. You now have " + quarters + " quarters.");
        } else {
            console.log("You lost 1 quarter. Now you only have " + quarters + " quarters.");
        }
    }
}
slot();