// Boda Boda Fare Calculator
function calculateBodaFare(distanceInKm) {
    const baseFare = 50; // Base fare in KES
    const chargePerKm = 15; // Charge per kilometer in KES

    // Calculate the total fare
    const totalFare = baseFare + (distanceInKm * chargePerKm);

    // Print the results to the console
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("Panda Pikipiki!");
}

// Prompt the user for the distance
const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = Number(userInput);

// Call the function with the user input
if (!isNaN(distanceInKm) && distanceInKm >= 0) {
    calculateBodaFare(distanceInKm);
} else {
    console.log("Tafadhali ingiza nambari sahihi ya kilomita.");
}

