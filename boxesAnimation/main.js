
// anime({
//     targets: 'div.box.red',
//     translateY: [
//         {value: 100, duration: 500},
//         { value: 0, duration: 800}
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine'
//     },
// });

// anime({
//     targets: 'div.box.blue',
//     translateY: [
//         {value: 100, duration: 500 , delay: 1300},
//         { value: 0, duration: 800}
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 1300
//     },
// });

// anime({
//     targets: 'div.box.green',
//     translateY: [
//         {value: 100, duration: 500 , delay: 2400},
//         { value: 0, duration: 800}
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 2400
//     },
// });

// anime({
//     targets: 'div.box.yellow',
//     translateY: [
//         {value: 100, duration: 500 , delay: 3700},
//         { value: 0, duration: 800}
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 3700
//     },
// });

// anime({
//     targets: 'div.box.orange',
//     translateY: [
//         {value: 100, duration: 500 , delay: 5000},
//         { value: 0, duration: 800}
//     ],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 5000
//     },
// });

const animation = anime({
    targets: 'div.box',
    translateY: [
        { value: 100, duration: 500},
        { value: 0, duration: 800}
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    },
    direction: 'alternate',
    loop: true,
    autoplay: false,
    delay: function(el, i, l){ return i * 1300}
});
console.log(animation);
document.querySelector('.boxes .button.play').onclick = animation.play;
document.querySelector('.boxes .button.pause').onclick = animation.pause;


