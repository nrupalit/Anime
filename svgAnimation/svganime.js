var play = document.querySelector('.play');
var back = document.querySelector('.back');

play.onclick = () => {
    var morph = anime({
        targets: '.ploymorph',
        points: [
          { value:'215,110 0,110 0,0 47.7,7 67,76'},
          { value:'215,110 0,110 0,0 0,0 67,76'},
          ],
        easing: 'easeOutQuad',
        duration: 1200,
        loop: false
      });
    anime({
        targets: 'button.back',
        opacity: 1,
        duration: 500,
        translateY: 150,
        delay: 1000
    })

    let promise = morph.finished.then(() => {
        back.onclick = () =>{
            var morph = anime({
                targets: '.ploymorph',
                points: [
                  { value:'215,110 0,110 0,0 47.7,7 67,76'},
                  { value:'215,110 0,110 0,0 47.4,0 215,0'},
                  ],
                easing: 'easeOutQuad',
                duration: 1200,
                loop: false
              });
              anime({
                targets: 'button.back',
                opacity: 0
            })
        }
        
    })
}


