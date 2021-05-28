/** @type {import('@jest/types').Config.InitialOptions} */
//@ts-ignore
const config = {
    verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => {
    return {
        verbose: true,
    };
};