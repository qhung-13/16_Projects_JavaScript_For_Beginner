const newColourButtonElement = document.getElementById("new_colour_button");
const currentColourElement = document.getElementById("current_colour");

const hexValues = ['0', '1', '2', '3', '4', '5', '6',' 7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const getRandomHexValues = () => {
    const randomIndexPosition = Math.floor(
        Math.random() * hexValues.length
    );

    const randomHexValues = hexValues[randomIndexPosition];

    return randomHexValues;
}

const getRandomHex = (stringLength) => {
    let hexString = '';
    for (let i = 0; i < stringLength; i ++) {
        hexString += getRandomHexValues();
    }

    return hexString;
}

if(newColourButtonElement) {
    newColourButtonElement.addEventListener("click", ()=> {
        const randomHexString = '#' + getRandomHex(6);

        document.body.style.setProperty('background-color', randomHexString);

        if(currentColourElement) {
            currentColourElement.textContent = randomHexString;
        }
    })
}