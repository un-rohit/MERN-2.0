// // console.log("Hello frpm days");

// const parent =document.getElementsByClassName("root");
// const list1= document.createElement("li");
// item1.innerText="List 1";
// const list2= document.createElement("li");
// item1.innerText="List 2";
// const list3= document.createElement("li");
// item1.innerText="List 3";

// list1.appendChild(item1);
// list2

// // <ul>
// //     <li>item 1</li>
// //     <li>item 2</li>
// // </ul>

// const item1 = React.createElement("li", {}, "Item 1");
// const item2 = React.createElement("li", {}, "Item 2");
// const item3 = React.createElement("ul", {}, [item1, item2]);

// const rootElem = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(rootElem);

// reactRoot.render(item3);


const item1 = React.createContext("li", {}, "Item 1");
console.log("🟡: item:" ,item1);

const item2 = React.createContext("li", {}, "Item 2");
const item3 = React.createContext("ul", {}, "Item 2");


const rootElem = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(rootElem);

reactRoot.render(list1);

