

let Slice = () => {
    let sliceclass = document.getElementsByClassName('slice')[0];
    var gridX = 11;
    var w = sliceclass.offsetWidth;
    var h = sliceclass.offsetHeight;
    var img = document.querySelectorAll('.slice .image')[0].src;

    
    // console.log(w, h, img);

    this.create = function(){
        for(x = 0; x < gridX; x++){
            var width = x * w / gridX + "px";
            var div = document.createElement("div");
            tran = document.getElementsByClassName('slice')[0].appendChild(div);

            div.style.left = width;
            div.style.top = '20%';
            div.style.width = w / gridX + "px";
            div.style.height = h + "px";
            div.style.backgroundImage = "url("+img+")";
            div.style.backgroundPosition = "-" + width;
            div.style.backgroundSize = w + "px";
            div.className += "divClass";
            div.style.opacity = 0;


            // this.console.log(tran);
            
        }
        let t1 = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
        })
        t1.add({
            targets: '.divClass',
            scaleX: 0,
            // rotateY: '50deg',
            // translateX: 200,
            // opacity: 0,
            // delay: anime.stagger(100, {from: 'left'}),
            // delay: function(el, i, l){ return i * 100}
        })
        .add({
            targets: '.divClass',
            // rotateY: '0deg',
            scaleX: 1,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            delay: anime.stagger(100),
            duration: 1500,
            opacity:1
        })
        // this.console.log(t1)
    }

    this.create();
}

window.onload = function(){
    var slice = Slice();
}


