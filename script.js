function changeImage() {
    var image = document.getElementById('sp1');
    if (image.src.match("sadpeepo1.png")) {
        image.src = "happypeepo1.png";
    } else {
        image.src = "sadpeepo1.png";
    }
}
function sp1Hint() {
    alert("Try clicking ;)");
}
function sp2b() {
    var image2 = document.getElementById('sp2');
    if (image2.src.match("sadpeepo2.png")) {
        image2.src = "happypeepo2.png";
    } else {
        image2.src = "sadpeepo2.png";
    }
}
function sp2Hint() {
    alert("Try hovering your mouse over peepo!")
}