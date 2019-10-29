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

    arrLetters.forEach((letter) => {
        for (const prop in alphabet) {
            const tempArr = alphabet[prop];
            const indexLetter = tempArr.indexOf(letter);
            if (indexLetter !== -1) {
                textMessage += `\n the button ${prop} ${indexLetter + 1} times `
            }
        }
    });
    console.log(textMessage);
};

textDecryption('Hello world');