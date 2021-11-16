let traveler_age;
let distanceInKM;
const kmPrice=0.21;
let ticketPrice;
let startPoint;
let endPoint;
const destination1 = {
    startPoint:"London",
    endPoint:"Manchester",
    distance: 294.1
};
const destination2 = {
    startPoint: "London",
    endPoint: "Liverpool",
    distance:309.7
};
const destination3 = {
    startPoint: "Manchester",
    endPoint: "Liverpool",
    distance:54.5
};

// Calculates the ticket price based on the traveler's age and the distance traveled

function trainFareCalculator(age, distance){
    if(distance === -1){
        return "Not calculated. Choose only the provided destinations.";
    }
   let ticketPrice = kmPrice * distance;
   if(age < 10){
       ticketPrice = 0;
       alert("You are underage!");
   }
   else if( age > 10 && age < 18){
        ticketPrice = ticketPrice - (0.2 * ticketPrice);
        
    }else if(age >= 65){
        ticketPrice = ticketPrice - (0.4 * ticketPrice);
        
    }
    return ticketPrice;
}

// Returns the distance between the departure station and destination

function calculateDistance(start, end){
    
    let distance;

    if(start.toUpperCase() === end.toUpperCase()){
        distance = 0;
    }
    
   else if((start.toUpperCase() === "LONDON" || start.toUpperCase() === "MANCHESTER") &&
         (end.toUpperCase() === "MANCHESTER" || end.toUpperCase() === "LONDON")){
        distance = destination1["distance"];
    }
    else if((start.toUpperCase() === "LONDON" || start.toUpperCase() === "LIVERPOOL") && 
            (end.toUpperCase() === "LIVERPOOL" || end.toUpperCase() === "LONDON")){
        distance = destination2["distance"];
    }
    else if((start.toUpperCase() === "LIVERPOOL" || start.toUpperCase() === "MANCHESTER") && 
            (end.toUpperCase() === "MANCHESTER" || end.toUpperCase() ==="LIVERPOOL")){
                distance = destination3["distance"];
    }
    else{
        distance = -1;
    }
    return distance;
}
   
         traveler_age = prompt("How old are you?");
         
         if(isNaN(traveler_age)){
             alert("Wrong age input!");
         }
         else{
            startPoint = prompt(`Enter your departure station:
            London, Manchester, Liverpool`);

            endPoint = prompt(`Enter your destination:
            London,Manchester, Liverpool`);

            distanceInKM = calculateDistance(startPoint,endPoint);

            ticketPrice = trainFareCalculator(traveler_age,distanceInKM);

            if(isNaN(ticketPrice)){
                alert(ticketPrice);
            }
            else{
                alert(`Your ticket from ${startPoint} to ${endPoint} costs: ${ticketPrice}.`);
               }
            }
            
       



