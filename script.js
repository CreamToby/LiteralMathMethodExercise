// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

// 1b
console.log(warmHugs.toUpperCase());

// 1c
// console.log(warmHugs.replace("like","love"));

warmHugs = warmHugs.replace("like","love");
console.log(warmHugs);

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
// console.log(beenImpaled.indexOf("I")); //18

beenImpaled = beenImpaled.slice(18);
console.log(beenImpaled);

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
// console.log(skullBones);

// 4
console.log(Math.PI);

// 5
let randomNumber = Math.random();  // 0 through 0.99999
randomNumber *= 3;  // 0 to 2.99999
randomNumber ++;  // 1 to 3.999999   
randomNumber = Math.floor(randomNumber);   // gets rid of decimal
console.log(randomNumber);  // 1 to 3

// BONUS
// 6
console.log(" Let It Go!".slice(1,11) .toUpperCase() + " Let It Go!".slice(0,11) .toUpperCase() );

console.log(" Let It Go!".toUpperCase().repeat(3).slice(-21));
console.log(" Let It Go!".toUpperCase().repeat(3).trim());

// 7a
let reindeers = "Reindeers are better than people.";

// 7b
console.log(reindeers.split(' ').join('_'));
console.log(reindeers.replace(/ /g, "_"));
// OR
// console.log(reindeers.replaceAll(' ', '_')); // I don't know why this is not working.....

// 8
let num = Math.sqrt(2);
console.log(num);  // 1.4142135623730951

console.log(Math.SQRT2);

// 9


let newRandomNumber = Math.floor(Math.random() * 17) +7;

newRandomNumber = Math.ceil(Math.random()*17) +6;

// console.log(newRandomNumber);


