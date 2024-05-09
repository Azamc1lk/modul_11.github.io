let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#FC3005"

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let item = ""
btn1.addEventListener("click", function () {
    tg.MainButton.setText("btn1 bosildi");
    item= " button 1 bosildi"
    tg.MainButton.show();
});

btn2.addEventListener("click", function () {
    tg.MainButton.setText("btn2 bosildi");
    item= " button 2 bosildi"
    tg.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item)
});

