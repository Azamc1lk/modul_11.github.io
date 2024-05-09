let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#FC3005"

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
    tg.MainButton.setText("btn1 bosildi");
    tg.MainButton.show();
});
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData("TestMessage")
});

