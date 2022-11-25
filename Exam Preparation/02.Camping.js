class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        };
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money) {

        if (!this.priceForTheCamp[condition]) {

            throw new Error("Unsuccessful registration at the camp.");
        }
        if (this.listOfParticipants.some(p => p.name === name)) {

            return `The ${name} is already registered at the camp.`;

        } else if (this.priceForTheCamp[condition] > money) {

            return `The money is not enough to pay the stay at the camp.`;

        } else {
            let participant = {
                name,
                condition,
                power: 100,
                wins: 0
            };
            this.listOfParticipants.push(participant);

            return `The ${name} was successfully registered.`

        }
    }
    unregisterParticipant(name) {
        let index = this.listOfParticipants.findIndex(x => x.name === name);
        if (index == -1) {
            throw new Error (`The ${name} is not registered in the camp.`);
        } else {
            this.listOfParticipants.splice(index, 1);
            return `The ${name} removed successfully.`;
        }
    }
    timeToPlay(typeOfGame, participant1, participant2) {

        if (typeOfGame === 'WaterBalloonFights') {

            if (!this.listOfParticipants.some(p => p.name === participant1)) {
                throw new Error('Invalid entered name/s.')
            }
            if (!this.listOfParticipants.some(p => p.name === participant2)) {
                throw new Error('Invalid entered name/s.')
            }
            let firstPlayer = this.listOfParticipants.find(p => p.name === participant1);
            let secondPlayer = this.listOfParticipants.find(p => p.name === participant2);

            if (firstPlayer.condition === secondPlayer.condition) {

                if (firstPlayer.power > secondPlayer.power) {
                    firstPlayer.wins++;
                    return `The ${participant1} is winner in the game ${typeOfGame}.`;
                } else if (secondPlayer.power > firstPlayer.power) {
                    secondPlayer.wins++;
                    return `The ${participant2} is winner in the game ${typeOfGame}.`;
                } else {
                    return `There is no winner.`;
                }

            } else {
                throw new Error(`Choose players with equal condition.`);
            }

        } else if (typeOfGame === 'Battleship') {
            if (!this.listOfParticipants.some(p => p.name === participant1)) {
                throw new Error('Invalid entered name/s.')
            }

            let player = this.listOfParticipants.find(p => p.name === participant1);
            player.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    }
    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        this.listOfParticipants.sort((a, b) => b.wins - a.wins).forEach(p => {
            result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);
        })
        return result.join('\n');
    }

}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

