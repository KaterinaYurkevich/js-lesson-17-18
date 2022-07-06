// 1)

const buttonElem = document.querySelector('.button');

buttonElem.addEventListener("click", () => console.log("Hi, you click me!"));

buttonElem.onclick = function() {
    console.log("Hi, you click me!")
}; // выводит только лва раза так у элемента DOM может быть только одно свойство onclick, этот перезапишет onclick, заданный в index.html для button


// 2)

const buttonElemDouble = document.querySelector('.button-double');

buttonElemDouble.addEventListener("dblclick", showMessage);

function showMessage() {
    console.log("Hi, you make a double click!")
};


// 3)

const blockMouseOver = document.querySelector(".block-for-mouse");

blockMouseOver.addEventListener("mouseover", function(event) {
    console.log(`coordinateX - ${event.clientX} \ncoordinateY - ${event.clientY}`)
});


// 4)

window.addEventListener("scroll", () => console.log(`${scrollY}px`))