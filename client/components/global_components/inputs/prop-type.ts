export const tuple = <T extends string[]>(...args: T) => args


const inputSizes =  tuple('mini', 'small', 'medium', 'large');

const colors =  tuple('primary', 'blue', 'yellow', 'green','red','default','black');

export type Colors  = typeof colors[number];
export type NormalSizes = typeof inputSizes[number];