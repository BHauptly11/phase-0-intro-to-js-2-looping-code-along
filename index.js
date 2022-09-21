//for (let age = 30; age < 40; age++) {
    //console.log(`I'm ${age} years old. Happy birthday to me!`);
//}

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
    //for (let i = 0; i < gifts.length; i++) {
        //console.log(`Wrapped ${gifts[i]} and added a bow!`);
        //debugger;
    //}

    //return gifts;
//}

//wrapGifts(gifts);

function writeCards(names, event) {
    let messages =[]
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        messages.push(message);
    }
    return messages;
}

function countDown(number) {    
    while (number > -1){
    console.log(number--);
    }

}

