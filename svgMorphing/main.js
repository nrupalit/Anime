var btnClick = document.getElementById("btn-click");
var btnClick2 = document.getElementById("btn2-click");
var overlay = document.getElementById('svgMorph');
var section = document.getElementById('sectionEnd');

var svgMorph = anime({
    targets: '.svgMorph',
    d: [
        { value: 'M0,0V472.563S69.727,171.874,397.525,171.874,511.742,0,511.742,0,638.571-6.565,719.7,0c103.556,5.034,189.852-2.157,330.8,0s219.3,0,219.3,0,773.112-3.6,402.037,0c-198.482-.719-8.629,3.6,97.8,0s149.917,0,149.917,0H0Z'},
        { value: 'M0,0V472.563S185.209,269.676,513.006,269.676,1269.8,0,1269.8,0,638.571-6.565,719.7,0c103.556,5.034,189.852-2.157,330.8,0s219.3,0,219.3,0,773.112-3.6,402.037,0c-198.482-.719-8.629,3.6,97.8,0s149.917,0,149.917,0H0Z'},
        { value: 'M0,0V472.563S1026.328,859.368,1354.126,859.368,1919.554,0,1919.554,0,638.571-6.565,719.7,0c103.556,5.034,189.852-2.157,330.8,0s869.053,0,869.053,0,123.355-3.6-247.719,0c-198.482-.719-8.629,3.6,97.8,0s149.917,0,149.917,0H0Z'},
        { value: 'M0,0V1080.862s1605.058-14.383,1919.554,0S1919.554,0,1919.554,0,638.571-6.565,719.7,0c103.556,5.034,189.852-2.157,330.8,0s869.053,0,869.053,0,123.355-3.6-247.719,0c-198.482-.719-8.629,3.6,97.8,0s149.917,0,149.917,0H0Z'}
    ],
    easing: 'easeOutQuad',
    duration: 2000,
    loop: false,
    autoplay: false
});

var svgMorphReverse = anime({
    targets: '.svgMorph',
    d: [
        { value: 'M0,0V472.563S1024.365,966.006,1352.163,966.006c296.331,0,629.072-814.3,567.391-966.006C1913.059-15.973,1269.8,0,1269.8,0S638.571-6.565,719.7,0c103.556,5.034,189.852-2.157,330.8,0s869.053,0,869.053,0,123.355-3.6-247.719,0c-198.482-.719-8.629,3.6,97.8,0s149.917,0,149.917,0H0Z'},
        { value: 'M0,0V472.563S185.209,269.676,513.006,269.676,1269.8,0,1269.8,0,638.571-6.565,719.7,0c103.556,5.034,189.852-2.157,330.8,0s219.3,0,219.3,0,773.112-3.6,402.037,0c-198.482-.719-8.629,3.6,97.8,0s149.917,0,149.917,0H0Z'},
        { value: 'M0,0V472.563S69.727,171.874,397.525,171.874,511.742,0,511.742,0,638.571-6.565,719.7,0c103.556,5.034,189.852-2.157,330.8,0s219.3,0,219.3,0,773.112-3.6,402.037,0c-198.482-.719-8.629,3.6,97.8,0s149.917,0,149.917,0H0Z'},
        { value: 'M0,0H0Z'}
        
        
    ],
    easing: 'easeOutQuad',
    duration: 2000,
    loop: false,
    autoplay: false
});

btnClick.addEventListener('click' , function(){
    svgMorph.restart();
    overlay.style.pointerEvents = 'auto'
    section.classList.add('animate__fadeInLeft' , 'display' , 'animate__delay-1s')
})

btnClick2.addEventListener('click', function(){
    svgMorphReverse.play();
    overlay.style.pointerEvents = 'none';
    section.classList.add('displayNone')
})