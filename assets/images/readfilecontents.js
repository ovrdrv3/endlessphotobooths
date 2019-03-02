var fs = require('fs');
var sharp = require('sharp');


if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}

var path = process.argv[2];

// List all files in a directory in Node.js recursively in a synchronous fashion
var walkSync = function(dir, filelist) {

  if( dir[dir.length-1] != '/') dir=dir.concat('/')

  var fs = fs || require('fs'),
  files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    }
    else {
      filelist.push(dir+file);
    }
  });
  return filelist;
};

var allFiles = walkSync(path);
// console.log(allFiles);
allFiles.forEach(item => {
        var itemIsPicture = false;
        if(item.slice(-4) == "webp"){
          var mobileResizedFile = item.slice(0,-5) + '-mob.webp';
          var itemIsPicture = true;
        }
        if(item.slice(-3) == "jpg"){
          var mobileResizedFile = item.slice(0,-4) + '-mob.jpg';
          var itemIsPicture = true;
        }
        if(item.slice(-3) == "png"){
          var mobileResizedFile = item.slice(0,-4) + '-mob.png';
          var itemIsPicture = true;
        }
        if (itemIsPicture) {
          sharp(item)
            .resize(400)
            .toFile(mobileResizedFile);
        }
    })

// allFiles.forEach(item => {
//         if(item.slice(-9) == "-mob.webp"){
//           var mobileResizedFile = item.slice(0,-5) + '-mob.webp';
//           // if the newly created file is larger than the original, just make a copy and rename it to -mob.webp.
//           var originalFileStats = fs.statSync(item);
//           var newFileStats = fs.statSync(mobileResizedFile);
//           if(originalFileStats.size < newFileStats.size){
//             console.log(item + ' is smaller than the newly created photo.');
//             // fs.copyFile(item, mobileResizedFile, (err) => {
//             //   if (err) throw err;
//             //   console.log(item + ' was duplicated');
//             // });
//           }
//         }
//     })
