
var Slice = function() {
    var sliceDiv = document.getElementById('slice');
    var gridX = 4;
    var w = sliceDiv.offsetWidth;
    var h = sliceDiv.offsetHeight;
    var img = document.querySelectorAll('#slice img')[0].src;
    var delay = 0.05;
    
    console.log(sliceDiv);
    console.log(w, h, img);

    this.create = function(){
        for(x = 0; x < gridX; x++){
            var width = x * w / gridX + "px";
            var div = document.createElement("div");
            document.getElementById('slice').appendChild(div);

            div.style.left = width;
            div.style.top = 0;
            div.style.width = w / gridX + "px";
            div.style.height = h + "px";
            div.style.backgroundImage = "url("+img+")";
            div.style.backgroundPosition = "-" + width;
            div.style.backgroundSize = w + "px";
            div.style.transitionDelay = x * delay + "s";
        }
    }

    this.create();

    document.getElementById('slice').onmouseover = function(){
        mouseOver();
    }

    document.getElementById('slice').onmouseout = function(){
        mouseOut();
    }

    function mouseOver(){
        sliceDiv.classList.add('active');
    }

    function mouseOut(){
        sliceDiv.classList.remove('active');
    }
}

window.onload = function(){
    var slice = Slice();
}



let t1 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
})

t1.add({
    targets: '#slice',
    translateY: '-50deg',
    scale: 0.5,
    duration: 1000,
    easing: 'cubicBezier(0.000, 1.040, 1.000, -0.070)',
    delay: function(el, i, l){ return i * 1300},
    opacity: 1,
    
})
