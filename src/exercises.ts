export function fillArray() : void {
    // Answer the question here

    let numbers: number[] = new Array(10);
    //fill the array with 10 random interger numbers between 0 and 70
    for(let i = 0; i < numbers.length; i++){
        numbers[i] = Math.floor(Math.random() * 71);
    }

    //display the integer number from first to last index positon
    console.log("Numbers form first to last: ", numbers);

    //display the integer numbers from last to first index position
    let reverseNumbers : number[] = [...numbers].reverse(); 
    console.log("Numbers from last to first: ", reverseNumbers);
}

function getRandomInt(min: number, max: number) : number {
    min = Math.ceil(min);
    max = Math.floor(max);
    //The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min); 
}