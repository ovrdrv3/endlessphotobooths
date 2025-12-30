var fs = require('fs');
var sharp = require('sharp');

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}

var path = process.argv[2];

var walkSync = function(dir, filelist) {
    if (dir[dir.length - 1] != '/') dir = dir.concat('/')

    var files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
        if (fs.statSync(dir + file).isDirectory()) {
            filelist = walkSync(dir + file + '/', filelist);
        } else {
            filelist.push(dir + file);
        }
    });
    return filelist;
};

var allFiles = walkSync(path);

allFiles.forEach(item => {
    var itemIsPicture = false;
    var ext = "";
    var baseName = "";

    // Identify extension and base filename
    if (item.toLowerCase().endsWith(".webp")) {
        ext = ".webp";
        baseName = item.slice(0, -5);
        itemIsPicture = true;
    } else if (item.toLowerCase().endsWith(".jpg")) {
        ext = ".jpg";
        baseName = item.slice(0, -4);
        itemIsPicture = true;
    } else if (item.toLowerCase().endsWith(".png")) {
        ext = ".png";
        baseName = item.slice(0, -4);
        itemIsPicture = true;
    }

    if (itemIsPicture) {
        // --- FILENAME SANITIZATION ---
        // Replaces spaces, ( and ) with _
        var sanitizedBase = baseName.replace(/[ ()]/g, '_');
        var mobileResizedFile = sanitizedBase + '-mob' + ext;

        sharp(item)
            .resize(400)
            .toFile(mobileResizedFile)
            .then(() => {
                console.log(`Created: ${mobileResizedFile}`);
            })
            .catch(err => {
                console.error(`Error processing ${item}:`, err);
            });
    }
});