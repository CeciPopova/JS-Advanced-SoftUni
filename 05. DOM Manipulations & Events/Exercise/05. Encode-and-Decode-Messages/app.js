function encodeAndDecodeMessages() {
    let message = document.querySelector('textarea');
    let recievedMessage = document.querySelectorAll('textarea')[1];

    let sendBtn = document.querySelector('button');
    let readBtn = document.querySelectorAll('button')[1];

    function encode() {
        let encodedMessage = '';
        for (let i = 0; i < message.value.length; i++) {
            let encodedLetter = String.fromCharCode(message.value.charCodeAt(i) + 1);
            encodedMessage += encodedLetter;
        }
        message.value = '';
        recievedMessage.value = encodedMessage;
    }

    function decode() {
        let decodeMessage = '';
        for (let i = 0; i < recievedMessage.value.length; i++) {
            let decodedLetter = String.fromCharCode(recievedMessage.value.charCodeAt(i) - 1);
            decodeMessage += decodedLetter;
        }
        recievedMessage.value = decodeMessage;
    }
    sendBtn.addEventListener('click', encode);
    readBtn.addEventListener('click', decode);
}