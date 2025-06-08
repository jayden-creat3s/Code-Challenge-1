// Mobile Money Transaction Fee Estimator
function estimateTransactionFee(amountToSend) {
    const transactionFeePercentage = 0.015; // 1.5%
    const minimumFee = 10; // Minimum fee in KES
    const maximumFee = 70; // Maximum fee in KES

    // Calculate the transaction fee
    let calculatedFee = amountToSend * transactionFeePercentage;

    // Apply minimum and maximum fee rules
    if (calculatedFee < minimumFee) {
        calculatedFee = minimumFee;
    } else if (calculatedFee > maximumFee) {
        calculatedFee = maximumFee;
    }

    // Calculate the total amount to be debited
    const totalAmountDebited = amountToSend + calculatedFee;

    // Print the results to the console
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
    console.log(`Total amount to be debited: KES ${totalAmountDebited}`);
    console.log("Send Money Securely!");
}

// Prompt the user for the amount to send
const userInput = prompt("Unatuma Ngapi? (KES):");
const amountToSend = Number(userInput);

// Call the function with the user input
if (!isNaN(amountToSend) && amountToSend > 0) {
    estimateTransactionFee(amountToSend);
} else {
    console.log("Tafadhali ingiza nambari sahihi ya kutuma.");
}

