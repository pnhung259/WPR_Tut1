function move_tank(str) {
    var step = 19;
    switch (str) {
        case "down":
            var x = document.getElementById("tank").offsetTop;
            x = x + step;
            document.getElementById("tank").style["top"] = x + 'px';
            break;

        case "up":
            var x = document.getElementById("tank").offsetTop;
            x = x - step;
            document.getElementById("tank").style["top"] = x + 'px';
            break;

        case "left":
            var y = document.getElementById("tank").offsetLeft;
            y = y - step;
            document.getElementById("tank").style["left"] = y + 'px';
            break;

        case "right":
            var y = document.getElementById("tank").offsetLeft;
            y = y + step;
            document.getElementById("tank").style["left"] = y + 'px';
            break;
    }
}