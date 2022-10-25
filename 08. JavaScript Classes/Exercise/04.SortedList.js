class List{
    constructor(){
        this.result = [];
        this.size = this.result.length;

    }

    add(value){
        this.result.push(value);
        this.size = this.result.length;
        this.result.sort((a, b) => a - b);

    };
    remove(index){
        if (index < 0 || index >= this.result.length) {
            throw new Error('Invalid index!')
        } 
        this.result.splice(index,1);
        this.size = this.result.length;
    };
    get(index){
        if (index < 0 || index >= this.result.length) {
            throw new Error('Invalid index!')
        } 
        return this.result[index];
    };
}
let list = new List();
list.add(30);
list.add(20);
list.add(10);
list.add(676);
list.add(98);
list.remove(0);
console.log(list.result);