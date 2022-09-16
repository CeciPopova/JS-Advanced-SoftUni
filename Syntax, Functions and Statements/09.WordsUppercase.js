function wordUppercase(text){
    return text.match(/\w+/g).join(", ").toUpperCase()
}
console.log(wordUppercase('Hi, how are you?'));
console.log("------------------------");
console.log(wordUppercase('hello'));
