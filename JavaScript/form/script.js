const title = document.getElementById("greetings");

const handleUserName = (e) => {
  // console.log("typed");
  // console.log("----");
  // console.log(e);
  const elem = e.target;
  console.log(elem.value);
  title.innerText = `Hello ${elem.value}!`;
};

const handlFormSubmit = (e) => {
  e.preventDefault();
  console.log(e);

//   const userName = e.target[0];
//   const email = e.target[1];
//   const password = e.target[2];
  console.log(input1.value, input2.value, input3.value);

const userName2 =e.target.usernameTemp.value;
const email2 =e.target.baseEmail.value;

  if (!email2.endWith ("@lpu.in")) {
    alert("Use LPU official mail");
    
  }

};


