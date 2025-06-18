const parent =document.getElementById("root");

const title =document.createElement("h1");
title.innerText =" Hello from DOM 1";
title.style.textDecoration ='underline';
title.style.textDecorationColor="red";


parent.append(title);


const title2=document.createElement("h1");
title.innerText=("hello from DOm 2");

parent.append(title2);