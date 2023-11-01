let { bech32 } = require("bech32");

// gov module address which we use as an example
let terraAddress = "terra10d07y265gmmuvt4z0w9aw880jnsr700juxf95n";

let { prefix, words } = bech32.decode(terraAddress);
console.log(`prefix = ${prefix}`); // should be `terra`
console.log(`words = ${words}`);

let injAddress = bech32.encode("inj", words);
console.log(`injAddress = ${injAddress}`);
