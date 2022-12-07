function fixTitle() {
    if (window.innerWidth < 600) {
        document.getElementById("ttl").style.fontSize = "150px";
    }
    else if (window.innerWidth < 753) {
        document.getElementById("ttl").style.fontSize = "200px";
    }
    else if (window.innerWidth < 1366) {
        document.getElementById("ttl").innerHTML = document.getElementById("ttl").innerHTML.replace("&nbsp;&nbsp;&nbsp;", "i")
        document.getElementById("ttl-img").style.display = "none";
        document.getElementById("ttl").style.fontSize = "225px";
    }
    else {
        document.getElementById("ttl").innerHTML = document.getElementById("ttl").innerHTML.replace("i", "&nbsp;&nbsp;&nbsp;")
        document.getElementById("ttl-img").style.display = "flex";
        document.getElementById("ttl").style.fontSize = "225px";
    }
}

window.onresize = fixTitle;