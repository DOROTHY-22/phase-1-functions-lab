function distanceFromHqInBlocks (pickUpStreet){
    const hqStreet = 42;
    return Math.abs(pickUpStreet-hqStreet);
}
function distanceFromHqInFeet (pickUpStreet){
    const hqStreet = 42;
    const feetPerBlock = 264;
    const numberOfBlocks = Math.abs (pickUpStreet-hqStreet);
    return (numberOfBlocks * feetPerBlock);
}
function distanceTravelledInFeet (startStreet,endStreet){
    const feetPerBlock = 264;
    const numberOfBlocks = Math.abs (endStreet - startStreet);
    return (numberOfBlocks * feetPerBlock);
}
    function calculatesFarePrice(start, destination) {
        const feetPerBlock = 264;
        const freeFeet = 400;
        const longDistanceFee = 25;
        const maxDistance = 2500;
        const pricePerFoot = 0.02;
      
        const distanceInFeet = Math.abs(destination - start) * feetPerBlock;
      
        if (distanceInFeet <= freeFeet) {
          return 0;
        } else if (distanceInFeet > maxDistance) {
          return 'cannot travel that far';
        } else if (distanceInFeet > freeFeet && distanceInFeet <= 2000) {
            const chargeableDistance = distanceInFeet - freeFeet;

          return parseFloat((chargeableDistance * pricePerFoot).toFixed(2));
        } else if(distanceInFeet > 2000) {
            return longDistanceFee;
        }
      }
      






// Code your solution in this file!
