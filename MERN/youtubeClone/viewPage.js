const searchQueryStr = window.location.search;
console.log("🟡 : seacrhQueryStr", searchQueryStr);

const res = searchQueryStr.split("=");
console.log(res);
const videoId = res[1];

const iframe = document.getElementsByTagName("iframe")[0];
iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);

const elem = document.getElementById("your-element-id"); // or whatever selector you use

if (elem) {
  elem.setAttribute("some-attribute", "some-value");
} else {
  console.error('Element with id "your-element-id" not found.');
}
