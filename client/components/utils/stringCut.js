export const stringToCut = (rawString, stringLenghToCut) => {

    // // let newString = "";
    //debugger
    if (rawString) {
        if (rawString.length <= stringLenghToCut) {
            return rawString;
        }
        return rawString.slice(0, stringLenghToCut) + '...';
    }
}

// console.log(stringToCut("A-tisket a-tasket A green and yellow basket", 100));


