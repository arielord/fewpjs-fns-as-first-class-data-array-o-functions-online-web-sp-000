function wakeDog(dogName, dogBreed){
  let s = 
  console.log(`Wake ${dogName} the ${dogBreed}`);
}
function leashDog(dogName, dogBreed){
  let s = `Leash ${dogName} the ${dogBreed}`
  console.log();
}
function walkToPark(dogName, dogBreed){
  let s = `Walk to the park with ${dogName} the ${dogBreed}`)
  console.log(;
}
function throwFrisbee(dogName, dogBreed){
  let s = `Throw the frisbee for ${dogName} the ${dogBreed}`)
  console.log(;
}
function walkHome(dogName, dogBreed){
  let s = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(s);
}
function unleashDog(dogName, dogBreed){
  let s = `Unleash ${dogName} the ${dogBreed}`;
  console.log(s);
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDoge];

function exerciseDog(dogName, dogBreed){
  for(let i = 0; i < routine.length; i++){
    routine[i](dogName, dogBreed);
  }
}