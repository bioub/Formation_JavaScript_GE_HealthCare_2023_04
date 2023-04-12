const fs = require('fs');

// Sync
try {
  const buffer = fs.readFileSync('.prettierrc');
  fs.writeFileSync('.prettierrc.copy', buffer);
  console.log('Copy sync done');
} catch (err) {
  console.log(err.message);
}


// Async (basée sur des callbacks)
// Callback Hell / Pyramid of doom
fs.readFile('.prettierrc', (err, buffer) => {
  if (err) {
    console.log(err.message)
  } else {
    fs.writeFile('.prettierrc.copy', buffer, (err) => {
      if (err) {
        console.log(err.message)
      } else {
        console.log('Copy async done');
      }
    });
  }
});

// ^
// |
// |
// |[readFile]               [=>]
// +---------------------------------------
