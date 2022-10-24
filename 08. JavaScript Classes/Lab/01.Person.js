class Person {
    constructor (firstName, lastName, age , email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;

    }
    toString() {
        let personalInfo = `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        return personalInfo;
    }
}


let person = new Person ('Ana', 'Simpson', 23, 'anas@yahoo.com');
console.log(person.toString());