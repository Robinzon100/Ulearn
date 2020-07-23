const path = require('path')
const fs = require('fs');


exports.deleteFile = (filePath) => {
    try {
        fs.unlinkSync(filePath);
        console.log('successfully deleted ' + filePath);
    } catch (err) {
        console.log(err)
    }
}


exports.deleteAllFile = (directory) => {
    try {
        fs.readdir(directory, (err, files) => {
            if (err) throw err;

            for (const file of files) {
                if (file) {
                    fs.unlink(path.join(directory, file), err => {
                        if (err) throw err;
                    });
                }
            }
        });
        // console.log('successfully deleted ' + filePath);
    } catch (err) {
        console.log(err)
    }
}




