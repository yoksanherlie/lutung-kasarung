let controller = null;

// scene a
function loadScene1aTitle() {
    let partTitle = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-title'
    })
        .setVelocity('.part-title-container-a-1', { opacity: 1, top: 80 }, { duration: 750 });

    controller.addScene([
        partTitle
    ]);
}

function loadScene1a2() {
    let sun = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-2',
    })
    .setVelocity('.sun-svg', { opacity: 1, top: 150 }, { duration: 1500 });

    let whiteCloudLeft = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-2',
    })
    .setVelocity('.white-cloud-left', { opacity: 1, left: -90 }, { duration: 1500 });

    let blueCloudLeft = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-2',
    })
    .setVelocity('.blue-cloud-left', { opacity: 1, left: -205 }, { duration: 900, easing: 'ease-in' });

    let whiteCloudRight = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-2',
    })
    .setVelocity('.white-cloud-right', { opacity: 1, right: -80 }, { duration: 1500 });

    let blueCloudRight = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-2',
    })
    .setVelocity('.blue-cloud-right', { opacity: 1, right: -195 }, { duration: 900, easing: 'cubic-bezier(.25, -1, .3, 2)' });

    let textScene = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-2',
        offset: 500
    })
    .setClassToggle('.text-1', 'reveal');

    controller.addScene([
        sun, whiteCloudLeft, blueCloudLeft, whiteCloudRight, blueCloudRight, textScene
    ]);
}

function loadScene1a3() {
    let boxBg = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-3',
    })
    .setVelocity('.scene-box-bg', { right: 0, opacity: 1 }, { duration: 1500 });

    let castle = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-3',
    })
    .setVelocity('.castle', { left: -160, opacity: 1 }, { duration: 1500 });

    let cloudInfo = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-3',
    })
    .setVelocity('#scene-1-a-3 .cloud-info', { bottom: 40, opacity: 1 }, { duration: 1000 });

    let chatCloud1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-3',
        offset: 300
    })
    .setClassToggle('.chat-cloud-a-3-1', 'animate-chat');

    let chatCloud2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-3',
        offset: 400
    })
    .setClassToggle('.chat-cloud-a-3-2', 'animate-chat');

    let text1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-3',
        offset: 400
    })
    .setVelocity('#scene-1-a-3 .text-1', { opacity: 1 }, { duration: 1000 });

    let blockElements = document.querySelectorAll('#scene-1-a-3 .scene-block div');

    for (let i = 0; i < blockElements.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: '#scene-1-a-3',
            offset: 600,
        })
        .setVelocity(blockElements[i], { opacity: 1, bottom: 0 }, { duration: 800, delay: i * 100 })
        // .addIndicators({name: 'block ' + (i+1) })
        .addTo(controller);
    }

    let text2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-3',
        offset: 700
    })
    .setVelocity('#scene-1-a-3 .text-2', { opacity: 1 }, { duration: 1000 });

    let blueCloud = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-3',
        offset: 700
    })
        .setVelocity('.blue-cloud-1a3-2', { opacity: 1, left: 80 }, { duration: 750 });

    controller.addScene([
        boxBg, castle, cloudInfo, chatCloud1, chatCloud2, text1, text2, blueCloud
    ]);
}

function loadScene1a4() {
    let boxBg = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-4',
    })
    .setVelocity('.scene-bg-1', { bottom: 0,  opacity: 1 }, { duration: 700 });

    let goldCloud = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-4',
    })
    .setVelocity('.gold-cloud', { right: -30,  opacity: 1 }, { duration: 700 });

    let whiteStar = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-4',
    })
    .setVelocity('.white-star', { top: -20, opacity: 1 }, { duration: 1000, easing: [0.680,-0.150, 0.265, 1.550]
    });

    let blueStar = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-4',
    })
    .setVelocity('.blue-star', { right: -87, opacity: 1 }, { duration: 1000, easing: [0.680,-0.150, 0.265, 1.550] });

    let blueCloud = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-4',
    })
    .setVelocity('.blue-cloud-2', { right: -80, opacity: 1 }, { duration: 700 });

    let guruminda = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-4',
        offset: 200
    })
    .setVelocity('.char-guruminda', { left: '50%',  opacity: 1 }, { duration: 1000 });

    let chatCloud1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-4',
        offset: 300,
    })
    .setClassToggle('.chat-cloud-1', 'animate-chat');

    let chatCloud2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-4',
        offset: 400,
    })
    .setClassToggle('.chat-cloud-2', 'animate-chat');

    controller.addScene([
        guruminda, boxBg, goldCloud, whiteStar, blueStar, blueCloud, chatCloud1, chatCloud2
    ])
}

function loadScene1a5() {
    let block21 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
    })
    .setVelocity('.block-2-1', { opacity: 1, left: 0 }, { duration: 700 });

    let chatCloud1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
        offset: 150,
    })
    .setClassToggle('.block-2-1-chat', 'animate-chat');

    let chatCloud2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
        offset: 100,
    })
    .setClassToggle('.block-2-1-chat-2', 'animate-chat');

    let breath = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
        offset: 200
    })
        .setVelocity('.block-2-1-breath', { opacity: 1, right: -110 }, { duration: 500 });

    let text1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
        offset: 200
    })
    .setVelocity('#scene-1-a-5 .text-1', { opacity: 1 }, { duration: 1000 });

    let text2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
        offset: 400
    })
    .setVelocity('#scene-1-a-5 .text-2', { opacity: 1 }, { duration: 1000 });

    let block22 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
        offset: 300
    })
    .setVelocity('.block-2-2', { opacity: 1, right: 0 }, { duration: 700, easing: [0.680,-0.150, 0.265, 1.550] });

    let block23 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
        offset: 400
    })
    .setVelocity('.block-2-3', { opacity: 1, left: 0 }, { duration: 700, easing: [0.680,-0.150, 0.265, 1.550] });

    let block23Cloud = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
        offset: 400
    })
    .setVelocity('.block-2-3-cloud', { right: -40, opacity: 1 }, { duration: 700, easing: [0.680,-0.150, 0.265, 1.550], delay: 300 });

    let block23Info = new ScrollMagic.Scene({
        triggerElement: '#scene-1-a-5',
        offset: 400
    })
    .setVelocity('.block-2-3-info', { left: '50%', opacity: 1 }, { duration: 700, easing: [0.680,-0.150, 0.265, 1.550], delay: 300 });

    controller.addScene([
        block21, chatCloud1, chatCloud2, breath, text1, text2, block22, block23, block23Cloud, block23Info
    ]);
}

function getPx(percentage) {
    return (percentage / 100) * window.innerWidth;
}

// scene b
function loadGuruMinda() {
    let x = 0, y = 0, bezierValues = [];

    for (let i = 0; i < 10; i++) {
        x = i % 2 === 0 ? 70 : 30;
        y = (i + 1) * 300;

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
    };

    let t = TweenMax.to(document.querySelector("#falling-guruminda"), .1, {css:{bezier:fallpath}});
    
    let timeline = new TimelineMax()
            .add(t, 0);

    let gurumindaScene = new ScrollMagic.Scene({triggerElement: "#scene-b-parent", duration: 3700, offset: 400})
                .setTween(timeline);

    let gurumindaAnimated = new ScrollMagic.Scene({triggerElement: '#scene-b-parent', duration: 2750, offset: 400})
                .setClassToggle('#falling-guruminda', 'animated');

    let gurumindaPass = new ScrollMagic.Scene({
        triggerElement: '#scene-b-parent',
        offset: 900
    })
    .setClassToggle('#falling-guruminda', 'change-color');

    // visualizeTweenMaxBezier(t, 200);

    controller.addScene([
        gurumindaScene, gurumindaPass, gurumindaAnimated
    ]);
}

function loadScene1b1() {
    let greenRain = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-1',
        offset: 300
    })
    .setClassToggle('.green-rain', 'animate-appear');

    let yellowRain = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-1',
        offset: 350
    })
    .setClassToggle('.yellow-rain', 'animate-appear');

    let thunder1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-1',
        offset: 400
    })
    .setClassToggle('.thunder-1', 'animate-appear');

    let thunder2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-1',
        offset: 400
    })
    .setClassToggle('.thunder-2', 'animate-appear');

    let thunder3 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-1',
        offset: 400
    })
    .setClassToggle('.thunder-3', 'animate-appear');

    let info1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-1',
        offset: 600
    })
    .setClassToggle('.info-1-b-1', 'animate-chat');

    let clouds = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-1',
    })
    .setClassToggle('.b-1-clouds', 'animated');

    controller.addScene([
        greenRain, yellowRain, thunder1, thunder2, thunder3, info1
    ]);
}

function loadScene1b2() {
    let cloudInfo1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-2',
        offset: 400
    })
    .setClassToggle('.info-1-b-2-1', 'animate-chat');

    let birds = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-2',
        offset: 700
    })
    .setVelocity('.birds', { opacity: 1, right: 20 }, { duration: 1000, easing: [0.680,-0.150, 0.265, 1.550] });

    let greenCloudBg1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-2',
        offset: 200
    })
    .setVelocity('.green-cloud-bg-2-1', { opacity: 1, right: -350 }, { duration: 700 });

    let greenCloud1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-2',
        offset: 200
    })
    .setVelocity('.green-cloud-2-b-2-1', { opacity: 1, right: -90 }, { duration: 1000 });

    controller.addScene([
        cloudInfo1, birds, greenCloudBg1, greenCloud1
    ]);
}

function loadScene1b3() {
    let cloudInfo1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-3',
    })
    .setClassToggle('.info-1-b-3-1', 'animate-chat');

    let greenCloudBg1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-3',
        offset: 200
    })
    .setVelocity('.green-cloud-bg-1', { opacity: 1, right: -350 }, { duration: 700 });

    let greenCloud1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-3',
        offset: 200
    })
    .setVelocity('.green-cloud-2-b-1', { opacity: 1, right: -90 }, { duration: 1000 });

    let greenCloudBg2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-3',
    })
    .setVelocity('.green-cloud-bg-2', { opacity: 1, left: -350 }, { duration: 700 });

    let greenCloud2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-3',
    })
    .setVelocity('.green-cloud-2-b-2', { opacity: 1, left: -90 }, { duration: 1000 });

    let chat1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-3',
        offset: 300
    })
    .setClassToggle('.chat-1-b-4-1', 'animate-chat');

    let text1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-3',
        offset: 230
    })
        .setClassToggle('.text-b3-1', 'animate-chat');

    controller.addScene([
        cloudInfo1, greenCloudBg1, greenCloud1, greenCloudBg2, greenCloud2, chat1, text1
    ]);
}

function loadScene1b4() {
    let singleCloudLeft = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-4',
    })
    .setVelocity('.single-gold-cloud-left', { left: -110 }, { duration: 1000, easing: [0.680,-0.150, 0.265, 1.550] });

    let singleCloudRight = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-4',
    })
    .setVelocity('.single-gold-cloud-right', { right: -110 }, { duration: 1000, easing: [0.680,-0.150, 0.265, 1.550] });

    let treeRight1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-4',
    })
    .setVelocity('.tree-right-1', { bottom: 430 }, { duration: 900 });

    let treeRight2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-4',
    })
    .setVelocity('.tree-right-2', { bottom: 530 }, { duration: 1100, easing: [0.680,-0.150, 0.265, 1.550], delay: 200 });

    let treeLeft1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-4',
    })
    .setVelocity('.tree-left-1', { bottom: 430 }, { duration: 700, delay: 200 });

    let treeLeft2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-4',
    })
    .setVelocity('.tree-left-2', { bottom: 530 }, { duration: 1400 });

    let text1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-b-4',
        offset: 600
    })
        .setClassToggle('.text-b4-1', 'animate-chat');

    controller.addScene([
        singleCloudLeft, singleCloudRight, treeRight1, treeRight2, treeLeft1, treeLeft2, text1
    ])
}

// scene c
function loadScene1c1() {
    let leftBlock1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-1',
        offset: 50
    })
    .setVelocity('.scene-box-c1-1-1', { opacity: 1 }, { duration: 500 });

    let rightBlock1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-1',
        offset: 50
    })
    .setVelocity('.scene-box-c1-1-2', { opacity: 1 }, { duration: 500 });

    let rightCloud1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-1',
        offset: 50
    })
        .setVelocity('.block-c1-1-2-cloud', { opacity: 1 }, { duration: 500 });

    let lutungFall = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-1',
        offset: 100
    })
        .setClassToggle('.lutung-fall-new', 'animated');

    let lutungCrown = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-1',
        offset: 100
    })
        .setClassToggle('.lutung-crown', 'animated');

    let chat1c1_1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-1',
        offset: 150
    })
        .setClassToggle('.chat-1c1-1', 'animate-chat');

    let text1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-1',
        offset: 200
    })
        .setVelocity('.scene-box-c1-text', { opacity: 1 }, { duration: 1000 });

    let leftBlock2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-1',
        offset: 250
    })
        .setVelocity('.scene-box-c1-2-1', { opacity: 1, left: 0 }, { duration: 1000 });

    let chatBlock2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-1',
        offset: 300
    })
        .setClassToggle('.scene-box-c1-2-1-chat', 'animate-chat');

    let rightBlock2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-1',
        offset: 250
    })
        .setVelocity('.scene-box-c1-2-2', { opacity: 1, left: -30 }, { duration: 1000 });

    let cloudInfo1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-1',
        offset: 250
    })
        .setClassToggle('.info-1c1-1', 'animate-chat');

    controller.addScene([
        leftBlock1, rightBlock1, rightCloud1, lutungFall, lutungCrown, text1, leftBlock2, chatBlock2, rightBlock2, chat1c1_1, cloudInfo1
    ])
}

function loadScene1c2() {
    let text1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-2'
    })
        .setVelocity('.scene-box-c2-text', { opacity: 1 }, { duration: 1000 });

    let leftBlock1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-2',
        offset: 100
    })
        .setVelocity('.scene-box-c2-1-1', { opacity: 1, left: 40 }, { duration: 1000 });

    let rightBlock1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-2',
        offset: 100
    })
        .setVelocity('.scene-box-c2-1-2', { opacity: 1, left: -30 }, { duration: 1000 });

    let bird1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-2',
        offset: 150
    })
        .setVelocity('.box-c2-1-2-bird1', { opacity: 1, right: 10 }, { duration: 1000, delay: 500 });

    let bird2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-2',
        offset: 150
    })
        .setVelocity('.box-c2-1-2-bird2', { opacity: 1, left: 20 }, { duration: 1000, delay: 1000 });

    let leftBlock2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-2',
        offset: 300
    })
        .setVelocity('.scene-box-c2-2-3', { opacity: 1, bottom: 0 }, { duration: 500 });

    let info1c2_1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-2',
        offset: 350
    })
        .setClassToggle('.info-1c2-1', 'animate-chat');

    let middleBlock2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-2',
        offset: 400
    })
        .setVelocity('.scene-box-c2-2-4', { opacity: 1, top: -5 }, { duration: 500, delay: 250 });

    let chat1c2_1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-2',
        offset: 450
    })
        .setClassToggle('.chat-1c2-1', 'animate-chat');

    let rightBlock2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-2',
        offset: 400
    })
        .setVelocity('.scene-box-c2-2-5', { opacity: 1, top: 50 }, { duration: 500, delay: 500 });

    controller.addScene([
        text1, leftBlock1, rightBlock1, bird1, bird2, leftBlock2, middleBlock2, rightBlock2, info1c2_1, chat1c2_1
    ]);
}

function loadScene1c3() {
    let lutungHead = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-3'
    })
        .setVelocity('#lutung-head', { opacity: 1, bottom: 0 }, { duration: 1000 });

    let lutungHeadChat = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-3',
        offset: 50
    })
        .setClassToggle('.lutung-head-chat', 'animate-chat');

    let text1 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-3',
        offset: 200
    })
        .setVelocity('.text-c3-1', { opacity: 1 }, { duration: 1000 });

    let textScene = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-3',
        offset: 300
    })
        .setClassToggle('.text-c3-2 .narration-text', 'reveal');

    let textLine = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-3',
        offset: 300
    })
        .setClassToggle('.text-c3-2 .text-line-big', 'reveal');

    let leftCloud = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-3',
        offset: 300
    })
        .setVelocity('.text-c3-2-left', { opacity: 1 }, { duration: 1000 });

    let rightCloud = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-3',
        offset: 300
    })
        .setVelocity('.text-c3-2-right', { opacity: 1 }, { duration: 1000 });

    let text2 = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-3',
        offset: 400
    })
        .setVelocity('.text-c3-3', { opacity: 1 }, { duration: 1000 });

    controller.addScene([
        lutungHead, lutungHeadChat, text1, textScene, text2, leftCloud, rightCloud, textLine
    ])
}

function loadScene1c4() {
    let partTitle = new ScrollMagic.Scene({
        triggerElement: '#scene-1-c-4'
    })
        .setVelocity('.part-title-container-c-1', { opacity: 1, top: 0 }, { duration: 750 });

    controller.addScene([
        partTitle
    ]);
}

// parallax
function loadParallax() {
    let parallax1 = document.getElementById('parallax-1');
    new Parallax(parallax1, {
        relativeInput: true
    });

    let title1 = document.getElementById('ganteng');
    new Parallax(title1, {
        relativeInput: true
    });


    let sceneCloud = document.getElementById('cloud-ganteng');
    new Parallax(sceneCloud, {
        relativeInput: true
    });

    let scene1c1 = document.getElementById('scene-1-c-1');
    new Parallax(scene1c1, {
        relativeInput: true
    });
}

window.onload = () => {
    controller = new ScrollMagic.Controller();

    // loadScene1aTitle();
    loadScene1a2();
    loadScene1a3();
    loadScene1a4();
    loadScene1a5();

    loadGuruMinda();
    loadScene1b1();
    loadScene1b2();
    loadScene1b3();
    loadScene1b4();

    loadScene1c1();
    loadScene1c2();
    loadScene1c3();
    loadScene1c4();

    loadParallax();
};

let visualizeTweenMaxBezier = (tween, steps) => {
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
}
