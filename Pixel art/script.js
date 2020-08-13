let canvas = document.querySelector("#pixelCanvas");
let height = document.querySelector("#inputHeight");
let width = document.querySelector("#inputWidth");
let sizePicker = document.querySelector("#sizePicker");
let color = document.querySelector("#colorPicker");
let reload = document.querySelector("#reload").addEventListener("click", clear1);

color.addEventListener("click", function(){});

sizePicker.onsubmit = function(e) {
    e.preventDefault();
    make1();
    //clear1();
};

function make1() {
    for (let r = 0; r<height.value; r++){
        const row = canvas.insertRow(r);
        for (let q=0; q<width.value; q++){
            const cell = row.insertCell(q);
            cell.addEventListener("click", fill);
        }
    }
}

function clear1 () {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function fill () {
    this.setAttribute("style", `background-color: ${color.value}`);
}