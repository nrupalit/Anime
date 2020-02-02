let t1 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
})

t1.add({
    targets: 'div.divtimeline',
    width: '100%',
    backgroundColor: 'rgb(197, 197, 255)',
    delay: anime.stagger(100, {from: 'center'}),
})

t1.add({
    targets: 'div.divtimeline',
    width: '90%',
    backgroundColor: 'rgb(235, 235, 255)',
})

t1.add({
    targets: 'h1.heading',
    opacity:1,
    translateY: 250,
    direction: 'alternate',
    easing: 'steps(5)',
    duration: 1000
})

t1.add({
    targets: 'div.divtimeline',
    rotate: 50,

})
t1.add({
    targets: 'h1.heading',
    translateY: 100,
    easing: 'easeOutExpo',
    opacity: 0,
    duration: 3000
})

t1.add({
    targets: 'div.subtitles',
    translateX: -500,
    opacity: 1,
    direction: 'alternate',
    duration:2000,
    easing: 'easeOutElastic(10, 2)',
    delay: function(el, i, l){ return i * 1300}
})
// var log = document.querySelector('array');

// const array ={ANIME: 2};
// anime({
//     targets: array,
//     ANIME:5,
//     translateX: 400,
//     update: function() {
//         log.innerHTML = JSON.stringify(array);
//       }
// })
// let roatediv = anime({
//     targets: 'section.timeline',
//     scaleY: '2',
//     scaleX: '2',
//     translateX: 400,
//     rotate: '40deg',
//     duration: 5000,
//     autoplay: false,
// })

// document.querySelector('h1.heading').addEventListener('mouseout', () => {
//     roatediv.play();
// })
