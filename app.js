// app.js - first program
// Run with: node app.js

function main() {
    console.log('this is the first java');
}

if (typeof require !== 'undefined' && require.main === module) {
    main();
}

module.exports = main;

// add new button 
