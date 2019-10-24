let textDecryption = (string) => {
    const alphabet = {
        0: [' '],
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };
    let textMessage = 'Need to press ';
    const arrLetters = string.toLowerCase().split('');

    for (let y = 0; y < arrLetters.length; y++) {
        for (let prop in alphabet) {
            let tempArr = alphabet[prop];
            let indexLetter = tempArr.indexOf(arrLetters[y]);
            if (indexLetter !== -1) {
                textMessage += `\n the button ${prop} ${indexLetter + 1} times `
            }
        }
    }
    console.log(textMessage);
};

textDecryption('Hello world');