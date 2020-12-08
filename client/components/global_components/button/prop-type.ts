
export const tuple = <T extends string[]>(...args: T) => args



const normalSizes =  tuple('auto','mini', 'small', 'medium', 'large');
const colors =  tuple('primary', 'blue', 'yellow', 'green','red','white','black');



export type Colors = typeof colors[number];
export type NormalSizes = typeof normalSizes[number];