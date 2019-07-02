let controller = null;

// scene a 
function loadScene1a2() {
    let sun = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-2',
    })
    .setVelocity('.sun-svg', { opacity: 1, top: 150 }, { duration: 1500 })
    .addIndicators();

    let whiteCloudLeft = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-2',
    })
    .setVelocity('.white-cloud-left', { opacity: 1, left: -90 }, { duration: 1500 })
    .addIndicators();

    let blueCloudLeft = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-2',
    })
    .setVelocity('.blue-cloud-left', { opacity: 1, left: -205 }, { duration: 900, easing: 'ease-in' })
    .addIndicators();

    let whiteCloudRight = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-2',
    })
    .setVelocity('.white-cloud-right', { opacity: 1, right: -80 }, { duration: 1500 })
    .addIndicators();

    let blueCloudRight = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-2',
    })
    .setVelocity('.blue-cloud-right', { opacity: 1, right: -195 }, { duration: 900, easing: 'cubic-bezier(.25, -1, .3, 2)' })
    .addIndicators();

    let textScene = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-2',
        offset: 500
    })
    .setClassToggle('.text-1', 'reveal')
    .addIndicators();

    controller.addScene([
        sun, whiteCloudLeft, blueCloudLeft, whiteCloudRight, blueCloudRight, textScene
    ]);
}

function loadScene1a3() {
    let boxBg = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-3',
    })
    .setVelocity('.scene-box-bg', { right: 0, opacity: 1 }, { duration: 1500 })
    .addIndicators();

    let castle = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-3',
    })
    .setVelocity('.castle', { left: -160, opacity: 1 }, { duration: 1500 })
    .addIndicators();

    let cloudInfo = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-3',
    })
    .setVelocity('#scene-1-a-3 .cloud-info', { bottom: 40, opacity: 1 }, { duration: 1000 })
    .addIndicators();

    let chatCloud1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-3',
        offset: 300
    })
    .setClassToggle('.chat-cloud-a-3-1', 'animate-chat')
    .addIndicators();

    let chatCloud2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-3',
        offset: 400
    })
    .setClassToggle('.chat-cloud-a-3-2', 'animate-chat')
    .addIndicators();

    let text1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-3',
        offset: 400
    })
    .setVelocity('#scene-1-a-3 .text-1', { opacity: 1 }, { duration: 1000 })
    .addIndicators();

    let blockElements = document.querySelectorAll('#scene-1-a-3 .scene-block div');

    for (let i = 0; i < blockElements.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: '#scene-1-a-3',
            offset: 600,
        })
        .setVelocity(blockElements[i], { opacity: 1, bottom: 0 }, { duration: 800, delay: i * 100 })
        .addIndicators({name: 'block ' + (i+1) })
        .addTo(controller);
    }

    let text2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-3',
        offset: 700
    })
    .setVelocity('#scene-1-a-3 .text-2', { opacity: 1 }, { duration: 1000 })
    .addIndicators();

    controller.addScene([
        boxBg, castle, cloudInfo, chatCloud1, chatCloud2, text1, text2
    ]);
}

function loadScene1a4() {
    let boxBg = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-4',
    })
    .setVelocity('.scene-bg-1', { bottom: 0,  opacity: 1 }, { duration: 700 })
    .addIndicators();

    let goldCloud = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-4',
    })
    .setVelocity('.gold-cloud', { right: -30,  opacity: 1 }, { duration: 700 })
    .addIndicators();

    let whiteStar = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-4',
    })
    .setVelocity('.white-star', { top: -20, opacity: 1 }, { duration: 1000, easing: [0.680,-0.150, 0.265, 1.550]
    })
    .addIndicators();

    let blueStar = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-4',
    })
    .setVelocity('.blue-star', { right: -87, opacity: 1 }, { duration: 1000, easing: [0.680,-0.150, 0.265, 1.550] })
    .addIndicators();

    let blueCloud = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-4',
    })
    .setVelocity('.blue-cloud-2', { right: -80, opacity: 1 }, { duration: 700 })
    .addIndicators();

    let guruminda = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-4',
        offset: 200
    })
    .setVelocity('.char-guruminda', { left: '50%',  opacity: 1 }, { duration: 1000 })
    .addIndicators();

    let chatCloud1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-4',
        offset: 300,
    })
    .setClassToggle('.chat-cloud-1', 'animate-chat')
    .addIndicators();

    let chatCloud2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-4',
        offset: 400,
    })
    .setClassToggle('.chat-cloud-2', 'animate-chat')
    .addIndicators();

    controller.addScene([
        guruminda, boxBg, goldCloud, whiteStar, blueStar, blueCloud, chatCloud1, chatCloud2
    ])
}

function loadScene1a5() {
    let block21 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
    })
    .setVelocity('.block-2-1', { opacity: 1, left: 0 }, { duration: 700 })
    .addIndicators();

    let chatCloud1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
        offset: 150,
    })
    .setClassToggle('.block-2-1-chat', 'animate-chat')
    .addIndicators();

    let chatCloud2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
        offset: 100,
    })
    .setClassToggle('.block-2-1-chat-2', 'animate-chat')
    .addIndicators();

    let text1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
        offset: 200
    })
    .setVelocity('#scene-1-a-5 .text-1', { opacity: 1 }, { duration: 1000 })
    .addIndicators();

    let text2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
        offset: 400
    })
    .setVelocity('#scene-1-a-5 .text-2', { opacity: 1 }, { duration: 1000 })
    .addIndicators();

    let block22 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
        offset: 300
    })
    .setVelocity('.block-2-2', { opacity: 1, right: 0 }, { duration: 700, easing: [0.680,-0.150, 0.265, 1.550] })
    .addIndicators();

    let block23 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
        offset: 400
    })
    .setVelocity('.block-2-3', { opacity: 1, left: 0 }, { duration: 700, easing: [0.680,-0.150, 0.265, 1.550] })
    .addIndicators();

    let block23Cloud = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
        offset: 400
    })
    .setVelocity('.block-2-3-cloud', { right: -40, opacity: 1 }, { duration: 700, easing: [0.680,-0.150, 0.265, 1.550], delay: 300 })
    .addIndicators();

    let block23Info = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
        offset: 400
    })
    .setVelocity('.block-2-3-info', { left: '50%', opacity: 1 }, { duration: 700, easing: [0.680,-0.150, 0.265, 1.550], delay: 300 })
    .addIndicators();

    controller.addScene([
        block21, chatCloud1, chatCloud2, text1, text2, block22, block23, block23Cloud, block23Info
    ]);
}

function getPx(percentage) {
    return (percentage / 100) * window.innerWidth;
}

// scene b
function loadGuruMinda() {
    let x = 0, y = 0, bezierValues = [];

    for (let i = 0; i < 8; i++) {
        x = i % 2 === 0 ? 70 : 30;
        y = (i + 1) * 300

        bezierValues.push({
            left: getPx(x),
            top: y
        });
    }

    bezierValues.push({
        left: getPx(50),
        top: y + 300
    });

    let fallpath = {
        type: 'soft',
        values: bezierValues
    }
    
    let timeline = new TimelineMax()
            .add(TweenMax.to(document.querySelector("#falling-guruminda"), .1, {css:{bezier:fallpath}}), 0);

    let gurumindaScene = new ScrollMagic.Scene({triggerElement: "#scene-b-parent", duration: 3250, offset: 400})
                .setClassToggle('#falling-guruminda', 'animated')
                .setTween(timeline)
                .addIndicators();

    controller.addScene([
        gurumindaScene
    ]);
}

function loadScene1b1() {
    let greenRain = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-1',
        offset: 300
    })
    .setClassToggle('.green-rain', 'animate-appear')
    .addIndicators();

    let yellowRain = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-1',
        offset: 350
    })
    .setClassToggle('.yellow-rain', 'animate-appear')
    .addIndicators();

    let thunder1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-1',
        offset: 400
    })
    .setClassToggle('.thunder-1', 'animate-appear')
    .addIndicators();

    let thunder2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-1',
        offset: 400
    })
    .setClassToggle('.thunder-2', 'animate-appear')
    .addIndicators();

    let thunder3 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-1',
        offset: 400
    })
    .setClassToggle('.thunder-3', 'animate-appear')
    .addIndicators();

    let info1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-1',
        offset: 600
    })
    .setClassToggle('.info-1-b-1', 'animate-chat')
    .addIndicators();

    let clouds = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-1',
    })
    .setClassToggle('.b-1-clouds', 'animated')
    .addIndicators();

    controller.addScene([
        greenRain, yellowRain, thunder1, thunder2, thunder3, info1, clouds
    ]);
}

function loadScene1b2() {
    let cloudInfo1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-2',
        offset: 400
    })
    .setClassToggle('.info-1-b-2-1', 'animate-chat')
    .addIndicators();

    let birds = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-2',
        offset: 700
    })
    .setVelocity('.birds', { opacity: 1, right: 20 }, { duration: 1000, easing: [0.680,-0.150, 0.265, 1.550] })
    .addIndicators();

    let greenCloudBg1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-2',
        offset: 200
    })
    .setVelocity('.green-cloud-bg-2-1', { opacity: 1, right: -350 }, { duration: 700 })
    .addIndicators();

    let greenCloud1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-2',
        offset: 200
    })
    .setVelocity('.green-cloud-2-b-2-1', { opacity: 1, right: -90 }, { duration: 1000 })
    .addIndicators();

    controller.addScene([
        cloudInfo1, birds, greenCloudBg1, greenCloud1
    ]);
}

function loadScene1b3() {
    let cloudInfo1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-3',
    })
    .setClassToggle('.info-1-b-3-1', 'animate-chat')
    .addIndicators();

    let greenCloudBg1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-3',
        offset: 200
    })
    .setVelocity('.green-cloud-bg-1', { opacity: 1, right: -350 }, { duration: 700 })
    .addIndicators();

    let greenCloud1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-3',
        offset: 200
    })
    .setVelocity('.green-cloud-2-b-1', { opacity: 1, right: -90 }, { duration: 1000 })
    .addIndicators();

    let greenCloudBg2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-3',
    })
    .setVelocity('.green-cloud-bg-2', { opacity: 1, left: -350 }, { duration: 700 })
    .addIndicators();

    let greenCloud2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-3',
    })
    .setVelocity('.green-cloud-2-b-2', { opacity: 1, left: -90 }, { duration: 1000 })
    .addIndicators();

    controller.addScene([
        cloudInfo1, greenCloudBg1, greenCloud1, greenCloudBg2, greenCloud2
    ]);
}

function loadScene1b4() {
    let chat1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-4',
        offset: 100
    })
    .setClassToggle('.chat-1-b-4-1', 'animate-chat')
    .addIndicators();

    let singleCloudLeft = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-4',
    })
    .setVelocity('.single-gold-cloud-left', { left: -110 }, { duration: 1000, easing: [0.680,-0.150, 0.265, 1.550] })
    .addIndicators();

    let singleCloudRight = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-4',
    })
    .setVelocity('.single-gold-cloud-right', { right: -110 }, { duration: 1000, easing: [0.680,-0.150, 0.265, 1.550] })
    .addIndicators();

    let treeRight1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-4',
    })
    .setVelocity('.tree-right-1', { bottom: 400 }, { duration: 900 })
    .addIndicators();

    let treeRight2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-4',
    })
    .setVelocity('.tree-right-2', { bottom: 530 }, { duration: 1100, easing: [0.680,-0.150, 0.265, 1.550], delay: 200 })
    .addIndicators();

    let treeLeft1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-4',
    })
    .setVelocity('.tree-left-1', { bottom: 400 }, { duration: 700, delay: 200 })
    .addIndicators();

    let treeLeft2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-4',
    })
    .setVelocity('.tree-left-2', { bottom: 530 }, { duration: 1400 })
    .addIndicators();

    controller.addScene([
        chat1, singleCloudLeft, singleCloudRight, treeRight1, treeRight2, treeLeft1, treeLeft2
    ])
}

window.onload = () => {
    controller = new ScrollMagic.Controller();

    loadScene1a2();
    loadScene1a3();
    loadScene1a4();
    loadScene1a5();

    loadGuruMinda();
    loadScene1b1();
    loadScene1b2();
    loadScene1b3();
    loadScene1b4();
};

/* let visualizeTweenMaxBezier = (tween, steps) => {
    //remove any existing curve
    $("#show-curve").empty();

    for (let i = 0; i < steps-1; i++){

        tween.progress(i/steps);

        $("#show-curve").append("<div id='point" + i + "'></div>");

        $("#point"+i).css({
            position: "absolute",
            width: "5px",
            height: "5px",
            "background-color": "#fff",
            top: tween.target.css("top"),
            left: tween.target.css("left"),
        });
    }
    tween.restart();
} */