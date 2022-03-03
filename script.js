// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

// 1b
console.log(warmHugs.toUpperCase());

// 1c
console.log(warmHugs.replace("like","love"));

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
// console.log(beenImpaled.indexOf("I")); //18
console.log(beenImpaled.slice(18));

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
// console.log(skullBones);

// 4
console.log(Math.PI);

// 5
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber ++;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);

// BONUS
// 6
console.log(" Let It Go!".slice(1,11) .toUpperCase() + " Let It Go!".slice(0,11) .toUpperCase() );

// 7a
const reindeers = "Reindeers are better than people.";

// 7b
console.log(reindeers.split(' ').join('_'));
console.log(reindeers.replace(/ /g, "_"));

// 8
let num = Math.sqrt(2);
// console.log(num);  // 1.4142135623730951
console.log(Math.round(num));

// 9
newRandomNumber = Math.floor(Math.random() * 17) +7;

// console.log(newRandomNumber);


