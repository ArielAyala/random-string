const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1 = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
}


const generateString = () => {
    const inputLength = document.getElementById('input-length-string');
    const lengthString = inputLength.value;
    // console.log()

    labelString = document.getElementById('label-string');
    labelString.innerHTML = generateRandomString(lengthString)
}


