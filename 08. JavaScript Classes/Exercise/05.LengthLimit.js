class Stringer {
    constructor(str, initialLength) {
        this.innerString = str;
        this.innerLength = initialLength;
    }
    increase(length) {
        return this.innerLength += length;

    }
    decrease(length) {
        this.innerLength -=  length;;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
        return this.innerLength;
    }
    // toString(){
    //     let result = '';
    //     if (this.innerLength === 0) {
    //         result =  '...';
    //     }else if (this.innerLength >= this.innerString.length ) {
    //         result = this.innerString;
    //     } else {
    //        for (let i = 0; i < this.innerLength; i++) {
    //         result+=this.innerString[i];
    //        }
    //        result+='...';
    //     }
    //     return result;
    // }
    toString() {
        if (this.innerLength === 0) {
            return '...';
        } else if (this.innerString.length > this.innerLength) {
            return this.innerString.substring(0, this.innerLength) + '...';
        } else {
            return this.innerString;
        }
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
