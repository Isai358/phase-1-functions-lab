// Code your solution in this file!

function distanceFromHqInBlocks(start) {
  if(start > 42) {
return start - 42;
  } else if(start < 42){
    return 42 - start;
  }
  console.log(`${start}`);
}

function distanceFromHqInFeet(start){
  if(start > 42){
    return (start - 42)*264;
  } else if(start < 42){
    return (42 - start)*264;
  }
}

function distanceTravelledInFeet(start, destination){
if( start < destination){
  return (destination - start)*264;
} else if(start > destination){
  return (start - destination)*264;
}
}

function calculatesFarePrice(start, destination){
  if (start < destination){
    return (destination - start)-1;
  } else if (start > destination){
    return(start - destination)+.56;
  }
  return 25;
}