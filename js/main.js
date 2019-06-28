let controller = null;

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

window.onload = () => {
    controller = new ScrollMagic.Controller();

    loadScene1a2();
    loadScene1a3();
    loadScene1a4();
    loadScene1a5();
};