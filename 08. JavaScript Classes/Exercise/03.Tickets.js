function ticketsSorter(tickets, sorting) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let result = [];

    tickets.map((ticket)=> {
        let [destination, price, status] = ticket.split('|');
        price = Number(price);
        result.push(new Ticket(destination, price, status));
    });

    return result.sort((a, b) => {
        if (typeof a[sorting] === 'number') {
            return a[sorting] - b[sorting];
        }else{
            return a[sorting].localeCompare(b[sorting]);
        }
    });
}