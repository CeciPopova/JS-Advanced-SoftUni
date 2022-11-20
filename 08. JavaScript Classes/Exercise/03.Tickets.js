function solve(tickets, criteria) {
    let result = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    for (let i = 0; i < tickets.length; i++) {
        let [destination, price, status] = tickets[i].split('|');
        price = Number(price);
        result.push(new Ticket(destination, price, status));
    }

    return result.sort((a, b) => {
        if (criteria === 'price') {
            return a[criteria] - b[criteria];
        }else{
            return a[criteria].localeCompare(b[criteria]);
        }
    });
}
// console.log(solve(['Philadelphia|94.20|available',
//  'New York City|95.99|available',
//  'New York City|95.99|sold',
//  'Boston|126.20|departed'],
// 'destination'));
console.log(solve(['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'status'));



