import anime from 'animejs';

export function animeExec(target, prop, duration, loop) {
    //set default
    if (typeof duration === "undefined") {
        duration = 2000;
    }
    if (typeof loop === "undefined") {
        loop = false;
    }


    var animeObj = {
        targets: target,
        loop: false
    };

    for (var k in prop) {
        animeObj[k] = prop[k];
    }

    anime(animeObj);
}