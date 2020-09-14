window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const icons = document.querySelectorAll(".grab");
    const yourtrack = document.getElementsByClassName(".yourtrack");

    var check = [];
    for (var i = 0; i < 14 * 20; i++) {
        check.push(0);
    }

    icons.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            alert("clicked");

            if (check[index] == 0) {
                check[index] = 1;

            } else {
                check[index] = 0;
            }
        })
    })

    var pressed = 0;

    yourtrack.addEventListener('click', function() {
        if (pressed == 0) pressed = 1;
        else pressed = 0;

        if (pressed == 1) {
            for (let i = 0; i <= 10000 && pressed == 1; i++) {
                task(i);
            }
        } else {
            icons.forEach((pad, index) => {
                sounds[index].pause();
                sounds[index].currentTime = 0;
            })
        }

        function task(i) {
            setTimeout(function() {

                icons.forEach((pad, index) => {
                    for (var i = 0; i < 14; i++) {
                        if (check[index + 20 * i] == 1) {
                            sounds[index + 20 * i].play();
                        }
                    }
                    if (index == 19) {
                        index = 0;
                        return;
                    } else stateChange();
                })

            }, 1000)
        }

        function stateChange() {
            setTimeout(function() {
                alert((i % 20) + 1 + " sec ended");
            }, 1000);
        }
    })
})
