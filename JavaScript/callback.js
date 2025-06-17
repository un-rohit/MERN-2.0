const printBill = (txt) => {
    console.log("-----------------");
    console.log("Rs. ",txt);
    console.log("-----------------");
    
};


const calculateBillAmountForFood = (price) => {
    return price * 1.05;
};
const calculateBillAmountForCloth = (price) => {
    return price * 1.12;
};
const calculateBillAmountForDrinks = (price) => {
    return price * 1.2;
};

const generateBill =(food,clothes,drinks) => {

    const foodAmount = calculateBillAmountForFood(food);
    const clothAmount = calculateBillAmountForCloth(clothes);
    const drinkAmount = calculateBillAmountForDrinks(drinks);
    const total = foodAmount + clothAmount + drinkAmount;
    FinalBillAMount=(foodAmount+clothAmount+drinkAmount);
    printBill(FinalBillAMount);
}

generateBill(111,4332,5324)