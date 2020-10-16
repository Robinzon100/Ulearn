export const stringToCut = (rawString, stringLenghToCut) => {

   
    if (rawString) {
        if (rawString.length <= stringLenghToCut) {
            return rawString;
        }
        return rawString.slice(0, stringLenghToCut) + '...';
    }
}



