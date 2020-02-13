let Slice = () => {
    let sliceclass = document.getElementsByClassName('slice')[0];
    var gridX = 11;
    var w = sliceclass.offsetWidth;
    var h = sliceclass.offsetHeight;
    var object = document.querySelectorAll('.slice .image');
    for(i = 0; i < object.length; i++){
        var image = [];
        console.log(image);
        image = document.querySelectorAll('.slice .image')[i].src;
        // console.log(sliceclass);
        this.create = function(){
            for(x = 0; x < gridX; x++){
                var height = x * h / gridX + "px";
                var div = document.createElement("div");
                var tran = document.getElementsByClassName('slice')[0].appendChild(div);
    
                tran.style.top = height;
                // div.style.top = '20%';
                tran.style.height = h / gridX + "px";
                tran.style.width = w + "px";
                tran.style.backgroundImage = "url("+image+")";
                tran.style.backgroundPosition = "0px -" + height;
                tran.style.backgroundSize = w + "px";
                tran.className += "divClass";
                tran.style.opacity = 0;
    
    
                // this.console.log(tran);
                
            }
            let t1 = anime.timeline({
                easing: 'easeOutExpo',
                duration: 750,
                loop: true 
            })
            t1.add({
                targets: '.divClass',
                width: '0%',
                // scaleX: 0,
                // scaleY: 0,
                // rotateY: '-100deg',
                // translateX: 500,
                translateX: w,
                // opacity: 0,
                // delay: anime.stagger(100, {from: 'left'}),
                // delay: function(el, i, l){ return i * 100}
            })
            .add({
                targets: '.divClass',
                width: '100%',
                // rotateY: '0deg',
                // scaleX: 1,
                // scaleY: 1,
                translateX: 0,
                // rotateY: '0deg',
                easing: 'cubicBezier(.5, .05, .1, .3)',
                delay: anime.stagger(100),
                duration: 1500,
                opacity:1,
            })
            .add({
                targets: '.divClass',
                width: '0%',
                translateX: w,
                easing: 'cubicBezier(.5, .05, .1, .3)',
                delay: anime.stagger(100),
                duration: 2000,
            })
        }
        this.create();
    }
    var img = document.querySelectorAll('.slice .image')[0].src;
    // console.log(object.length);
    
    

}

window.onload = () => {
    var slice = Slice();
}