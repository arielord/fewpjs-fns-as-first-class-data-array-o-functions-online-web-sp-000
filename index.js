function wakeDog(dogName, dogBreed){
  let s = 
  console.log(`Wake ${dogName} the ${dogBreed}`);
}
function leashDog(dogName, dogBreed){
  let s = 
  console.log(`Leash ${dogName} the ${dogBreed}`);
}
function walkToPark(dogName, dogBreed){
  let s = 
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
}
function throwFrisbee(dogName, dogBreed){
  let s = 
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}
function walkHome(dogName, dogBreed){
  let s = 
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
}
function unleashDog(dogName, dogBreed){
  let s = 
  console.log(`Unleash ${dogName} the ${dogBreed}`);
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDoge];

function exerciseDog(dogName, dogBreed){
  for(let i = 0; i < routine.length; i++){
    routine[i](dogName, dogBreed);
  }
}