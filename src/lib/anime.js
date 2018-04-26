import anime from 'animejs';

export function animeExec(target, prop, loop = false) {
    var animeObj = {
        targets: target,
        loop: loop
    };

    for (var k in prop) {
        animeObj[k] = prop[k];
    }

    anime(animeObj);
}

export function animatePulse(target) {
    var expandRate = 400;
    var contractRate = 500;
    var offset = 4;
    var translate = 6;
    var prop = {
        translateY: [
            { value: `+=${translate}`, duration: contractRate },
            { value: `-=${translate}`, duration: expandRate },
        ],

        width: [
            { value: `+=${offset}`, duration: expandRate },
            { value: `-=${offset}`, duration: contractRate },
        ],
        height: [
            { value: `+=${offset}`, duration: expandRate },
            { value: `-=${offset}`, duration: contractRate },
        ],
        //easing: 'easeInQuad'
    };

    animeExec(target, prop, true);
}
