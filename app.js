// "use strict";

(function(){
    const customSwitch = document.getElementById('customSwitch1')
    const body = document.querySelector('body')

    let date = new Date()
    let hour = date.getHours()

    if(hour<6 || hour>= 16){
        body.style.backgroundColor = 'rgba(1, 4, 19, 0.753)'
        changeBackground('rgba(1, 4, 19, 0.753)', 'white')
    }else{
        body.style.backgroundColor = 'white'
        changeBackground('white', 'rgba(1, 4, 19, 0.753)')
    }


    function changeBackground(backgroundColor1, backgroundColor2){
        customSwitch.addEventListener('click', function(event){
            if(event.target.checked){
                body.style.backgroundColor = backgroundColor2
            }
            else body.style.backgroundColor = backgroundColor1
        })
    }
})();
