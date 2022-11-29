function d6() {
    //should randomly return 1,2,3,4,5, or 6
    var Round = 0;
    var roll = Math.random();
    Round = roll*6
    Round = Math.ceil(Round);
    return Round;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

function magicEightBall()
{
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    var index = lifesAnswers.length;
    var answer = 0;
    answer = Math.floor(Math.random() * index);

    return lifesAnswers[answer];
}

console.log(magicEightBall());