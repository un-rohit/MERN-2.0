const request =window.fetch("https://dummyjson.com/products");
console.log("🟡: request:", request);
console.log("🟡: request:" ,request);

const successCB=(reponse) => {
    console.log("reponse",reponse);
    const pr2 =reponse.json();

    pr2.then((data) => {
        console.log("Data",data);

       

        
    });
    
};
const errorCB =() => {
    alert("unable to get products--->",errorCB.message)
}
request.then(successCB).catch(errorCB);