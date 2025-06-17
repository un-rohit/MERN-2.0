const cse018 ={
    name: "Rohit",
    address: "TataNager",
    bloodGroup: "+O",
};


//read the value of proprty
const studentName =cse018.name;
console.log("studentName:", studentName);

// update the value of property
cse018.bloodGroup ="O+";

// add a key-value pair 
cse018.university="LPU";


delete cse018.address;

console.log("cse018:",cse018)

