function fixTitle() {
    if (window.innerWidth < 600) {
        document.getElementById("ttl").style.fontSize = "150px";
    }
    else if (window.innerWidth < 753) {
        document.getElementById("ttl").style.fontSize = "200px";
    }
    else if (window.innerWidth < 1357) {
        // let ttl = document.getElementById("ttl").innerHTML
        // for(let i = 0; i < ttl.length; i++) {
        //     console.log(charAt(i))
        //     if(ttl.charAt(i) == "&nbsp;"
        // }
        document.getElementById("ttl").innerHTML = "Monkey Business";
        document.getElementById("ttl-img").style.display = "none";
        document.getElementById("ttl").style.fontSize = "225px";
    }
    else {
        document.getElementById("ttl").innerHTML = "Monkey Bus&nbsp;&nbsp;&nbsp;ness";
        document.getElementById("ttl-img").style.display = "flex";
        document.getElementById("ttl").style.fontSize = "225px";
    }
}

window.onresize = fixTitle;