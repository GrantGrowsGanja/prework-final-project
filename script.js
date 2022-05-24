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