function wakeDog(dogName, dogBreed){
  let s = `Wake ${dogName} the ${dogBreed}`;
  console.log(s);
  return s;
}
function leashDog(dogName, dogBreed){
  let s = `Leash ${dogName} the ${dogBreed}`;
  console.log(s);
  return s;
}
function walkToPark(dogName, dogBreed){
  let s = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(s);
  return s;
}
function throwFrisbee(dogName, dogBreed){
  let s = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(s);
  return s;
}
function walkHome(dogName, dogBreed){
  let s = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(s);
  return s;
}
function unleashDog(dogName, dogBreed){
  let s = `Unleash ${dogName} the ${dogBreed}`;
  console.log(s);
  return s;
}

var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDoge];

function exerciseDog(dogName, dogBreed){
  for(let i = 0; i < routine.length; i++){
    let s = routine[i](dogName, dogBreed);
    arr.push(s);
  }
  return arr;
}