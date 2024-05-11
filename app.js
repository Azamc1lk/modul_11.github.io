let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#FC3005"

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let item = ""
btn1.addEventListener("click", function () {
    tg.MainButton.setText("kola bosildi");
    item = " kola tanlandi  narx:3$"

    tg.MainButton.show();
});

btn2.addEventListener("click", function () {
    tg.MainButton.setText("lavash bosildi");
    item = " lavash tanlandi narx:9$ "

    tg.MainButton.show();
});
btn3.addEventListener("click", function () {
    tg.MainButton.setText("burger bosildi");
    item = " burger tanlandi  narx:8$"


    tg.MainButton.show();
});
btn4.addEventListener("click", function () {
    tg.MainButton.setText("pizza bosildi");
    item = " pizza tanlandi  narxi:4$"

    tg.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item)
});
