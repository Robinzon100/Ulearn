export const stringToCut = (rawString:string, stringLenghToCut:number) => {
    
    if (rawString) {
        if (rawString.length <= stringLenghToCut) {
            return rawString;
        }
        return rawString.slice(0, stringLenghToCut) + '...';
    }
}



