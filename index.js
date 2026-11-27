
// console.log("Hello world");
// //alert()


// const grade = 59;

// if (grade >= 70) {
//     console.log("You got an A");
// }
// else if (grade >= 60 && grade < 70) {
//     console.log("You got a B");
// }
// else if (grade >= 50 && grade < 60) {
//     console.log("You got a C");
// }
// else if (grade >= 45 && grade < 50) {
//     console.log("You got a D");
// }
// else if (grade >= 40 && grade < 45) {
//     console.log("You got an E");
// }
// else {
//     console.log("You got an F");
// }

// let number = 10;
// if (number > 0) {
//     console.log("The number is positive");
// }
// else {
//     console.log("The number is negative");
// }

// let secnumber = 10;
// if (secnumber % 2 === 0) {
//     console.log(secnumber = "even");
// }
// else { console.log(secnumber = "odd"); }

// let temperature = 30;
// if (temperature > 30) {
//     console.log("it is a hot day");
// }
// else {
//     console.log("the weather is moderate");
// }

// let tetnumber = 2
// if (tetnumber > 0) {
//     console.log("the number is positive");
// }
// else if (tetnumber < 0) {
//     console.log("the number is negative");
// }
// else {
//     console.log("the number is zero");
// }

// let age = 48
// if (age < 13) {
//     console.log("Child")
// }
// else if (age >= 13 && age <= 19) {
//     console.log("Teenager")
// }
// else if (age >= 20 && age <= 59) {
//     console.log("Adult")
// }
// else {
//     console.log("Senior Citizen")
// }

// let num1 = 7;
// let num2 = 7;

// if (num1 > num2){
//     console.log("num1 is greater than num2");
// }
// else if (num1 < num2){
//     console.log("num2 is greater than num1");
// }
// else{
//     console.log("num1 and num2 are equal");
// }

// //for loop
// //for(initialize; condition; iterate){
// // }?

// let i=1;
// while (i<=10){
//     if (i) %2 = 0;
//     console.log(i);
//     i += 2;
// } break

// let b=10;
// while (b>=0){
//     console.log(b)
//     b--;
// }

// let current=1
// while (current*=2){
//     console.log(current)
//     current===1000
// }

// function multiply (a, b) {
//     return a*b
// }
// console.log(multiply(4,5));

// function arrayTotal(array){
//     array.forEach(function(element){

//     })
// }



// array([1,2,3,4,5,6,7,8,9,10])

// let num = [300, 10, 5, 2];
// let total = 0;
// num.forEach((element) => {
//     total = total - element;
// })
// console.log(total);

// let employee = {
//     name: "John Doe",   
//     basicSalary: 100000,
//     allowance: 20000,
//     taxPercentage: 10
// }

// function calculateAnnualGrossSalary(basicMonthlySalary, basicMonthlyAllowance){
//     let totalAnnualSalary  = basicMonthlySalary * 12;
//     let totalAnnualAllowance = basicMonthlyAllowance * 12;

//     return totalAnnualSalary + totalAnnualAllowance;
// }

// // console.log(calculateAnnualGrossSalary(employee.basicSalary, employee.allowance));


// function calculateGrossSalary(basicMonthlySalary, basicMonthlyAllowance){
//     return basicMonthlySalary + basicMonthlyAllowance;
// }

// // console.log(calculateGrossSalary(employee.basicSalary, employee.allowance))

// function calculateTax(grossSalary, taxPercentage){
//     return grossSalary * (taxPercentage/100);
// }
// console.log(calculateTax(175000,8));

// function calculateNetSalary(grossSalary, taxPercentage){
//     return grossSalary - (grossSalary * (taxPercentage/100))

// }
// console.log(calculateNetSalary(100000, 5))

let customer = {
    name: "John Doe",
    meterNumber: 12345,
    unitsConsumed: 105,
    costPerUnit: 100,
    serviceCharge: 150,
}

function calculateElectricityBill(unitsConsumed, costPerUnit, serviceCharge) {
    return (unitsConsumed * costPerUnit) + serviceCharge;
}
console.log(calculateElectricityBill(customer.unitsConsumed, customer.costPerUnit, customer.serviceCharge));

// QUES 1: ORDER
let order = {
    name: "ada",
    meal: "jollofRice",
    quantity: 3,
    pricePerMeal: 2500,
    deliveryFee: 1000,
}
function calculateOrderTotal(quantity, pricePerMeal, deliveryFee) {
    return (quantity * pricePerMeal) + deliveryFee;
}
console.log(calculateOrderTotal(order.quantity, order.pricePerMeal, order.deliveryFee));

// QUES 2: BOOKING
let booking = {
    name: "samuel",
    movieTitle: "theLastJourney",
    numberOfTickets: 4,
    pricePerTicket: 3000,
    bookingFee: 500,
}

function calculateTicketCost(numberOfTickets, pricePerTicket, bookingFee) {
    return (numberOfTickets * pricePerTicket) + bookingFee;
}
console.log(calculateTicketCost(booking.numberOfTickets, booking.pricePerTicket, booking.bookingFee));


// QUES 3: DATA PURCHASE
let dataPurchase = {
    name: "grace",
    dataPlan: "10gb",
    planPrice: 5000,
    discountPercentage: 10,
}

function calculateDiscountedPrice(planPrice, discountPercentage) {
    return planPrice - (planPrice * (discountPercentage / 100));
}
console.log(calculateDiscountedPrice(dataPurchase.planPrice, dataPurchase.discountPercentage));


// QUES 4: DELIVERY
let delivery = {
    name: "michael",
    destination: "uyo",
    distance: 12,
    costPerKilometre: 150,
    handlingFee: 800,
}

function calculateDeliveryFee(distance, costPerKilometre, handlingFee) {
    return (distance * costPerKilometre) + handlingFee;
}
console.log(calculateDeliveryFee(delivery.distance, delivery.costPerKilometre, delivery.handlingFee));





// QUES 5: Registration 
let registration = {
    organisation: "brightFutureClub",
    numberOfAttendees: 6,
    feePerAttendee: 4000,
    groupDiscount: 10,
}

function calculateRegistrationTotal(numberOfAttendees, feePerAttendee, discountPercentage) {
    let totalPrice = numberOfAttendees * feePerAttendee;

    if (numberOfAttendees >= 5){ 
        totalPrice = totalPrice - ((discountPercentage / 100) * totalPrice);
        return totalPrice;
    }
    return totalPrice;
}

console.log(calculateRegistrationTotal(registration.numberOfAttendees, registration.feePerAttendee, registration.groupDiscount));



//QUES 6: stationeryOrder
let stationeryOrder={
    schoolName: "greenfieldAcademy",
    item: "exerciseBook",
    quantity: 8,
    pricePerNotebook: 1250,
    deliveryCharge: 1500,
}

function calculateStationeryTotal(quantity, pricePerNotebook, deliveryCharge){
    return (quantity * pricePerNotebook) + deliveryCharge;
}
console.log (calculateStationeryTotal(stationeryOrder.quantity, stationeryOrder.pricePerNotebook, stationeryOrder.deliveryCharge));



//QUES 7: hotelBooking
let hotelBooking= {
    name: "daniel",
    roomType: "standardRoom",
    numberOfNights: 3,
    pricePerNight: 18000,
    serviceFee: 2500,
}

const calculateAccomodationCost = (numberOfNights, pricePerNight, serviceFee) => (pricePerNight * numberOfNights) + serviceFee;
console.log (calculateAccomodationCost(hotelBooking.numberOfNights, hotelBooking.pricePerNight, hotelBooking.serviceFee));


//QUES 8: electricityBill
let electricityBill={
    name: "esther",
    unitsConsumed: 120,
    standardRate: "65perUnits",
    higherRate: "80perUnitAbove100",
    meterServiceCharge: 1500,
}

function calculateElectricityBill(unitsConsumed, standardRate, higherRate, serviceCharge){
    let energyCharge = 0;
    if (unitsConsumed<=100){
        unitsConsumed * standardRate;
    }
    else {
        first100cost = 100 * standardRate;
        remainingUnits = unitsConsumed - 100;
        remainingCost = remainingUnits * higherRate;
        energyCharge = first100cost + remainingCost; 
    }
    return energyCharge + serviceCharge;
}

console.log(calculateElectricityBill(electricityBill.unitsConsumed, electricityBill.standardRate, electricityBill.higherRate, electricityBill.serviceCharge));


//QUES 9: employeeSales
let employeeSales = {
    name: "chika",
    monthlySales: 350000,
    monthlySalesTarget: 300000,
    commissionIfTargetsIsMet: 5,
    commissionIfTargetIsNotMet: 3,
}

const calculateSalesCommission = (salesAmount, salesTarget, qualifyingRate, standardRate) => {
  let commissionRate;
  let targetStatus;
  
  if (salesAmount >= salesTarget) {
    commissionRate = qualifyingRate;
    targetStatus = "Target achieved";
  } else {
    commissionRate = standardRate;
    targetStatus = "Target not achieved";
  }
  
  const commissionEarned = salesAmount * (commissionRate / 100);
  
  console.log(`Sales target status: ${targetStatus}`);
  console.log(`Commission rate applied: ${commissionRate}%`);
  console.log(`Commission earned: ₦${commissionEarned.toLocaleString()}`);
  
  return commissionEarned;
};

calculateSalesCommission(
  employeeSales.monthlySales,
  employeeSales.monthlySalesTarget,
  employeeSales.qualifyingRate,
  employeeSales.standardRate
);

// QUES 10 : gymMembership

let gymMembership = {
  customerName: "Ibrahim",
  membershipPlan: "Standard",
  numberOfMonths: 6,
  monthlyFee: 12000,
  discountPercentage: 15,
  registrationFee: 2000
};

function calculateMembershipPayment(numberOfMonths, monthlyFee, discountPercentage, registrationFee) {
  const originalCost = numberOfMonths * monthlyFee;
  
  let discountAmount = 0;
  let appliedDiscountPercent = 0;
  let discountedCost = originalCost;

  if (numberOfMonths >= 6) {
    appliedDiscountPercent = discountPercentage;
    discountAmount = originalCost * (discountPercentage / 100);
    discountedCost = originalCost - discountAmount;
  } else {
    discountedCost = originalCost;
  }

  const finalPayment = discountedCost + registrationFee;

  console.log(`Original membership cost: ₦${originalCost.toLocaleString()}`);
  console.log(`Discount: ${appliedDiscountPercent}% (₦${discountAmount.toLocaleString()})`);
  console.log(`Registration fee: ₦${registrationFee.toLocaleString()}`);
  console.log(`Final payment: ₦${finalPayment.toLocaleString()}`);

  return finalPayment;
}

calculateMembershipPayment(
  gymMembership.numberOfMonths,
  gymMembership.monthlyFee,
  gymMembership.discountPercentage,
  gymMembership.registrationFee
);
