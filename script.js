const messages = {
    partOne: ['study','play a game','excercise','cook','watch videos'],
    partTwo: ['30 minutes','1 hour','2 hours','3 hours','4 hours'],
    partThree: ['before work','during work','after work'],
    constructMessage() {
        randActivity = this.partOne[Math.floor(Math.random()*this.partOne.length)];
        randDuration = this.partTwo[Math.floor(Math.random() * this.partTwo.length)];
        randTime = this.partThree[Math.floor(Math.random() * this.partThree.length)];
        return `You should ${randActivity} for ${randDuration} ${randTime}`;
    }
};

console.log(messages.constructMessage());