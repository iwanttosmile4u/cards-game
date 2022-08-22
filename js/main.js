const Application = PIXI.Application;
const app = new Application({
    width: 640,
    height: 480,
    transparent: false,
    antialias: true,
});

app.renderer.backgroundColor = 0x888888;
document.body.appendChild(app.view);

const gameContainer = new PIXI.Container();
gameContainer.position.x = 120;
gameContainer.position.y = 60;
app.stage.addChild(gameContainer);

const arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

for (let x = 1; x <= 4; x++) {
    for (let y = 1; y <= 4; y++) {
        const randomCard = Math.floor(Math.random() * arr.length);
        // const topImg = PIXI.Sprite.from('./assets/rsz_avocado.png');

        const Graphics = PIXI.Graphics;
        const rect = new Graphics();
        rect.beginFill(0xffffff);
        rect.drawRect(0, 0, 82, 82);
        rect.endFill();

        const card = new PIXI.Container();
        card.col = arr[randomCard];
        arr.splice(randomCard, 1);
        card.addChild(rect);
        card.position.x = (x - 1) * 90;
        card.position.y = (y - 1) * 90;
        gameContainer.addChild(card);

        card.interactive = true;
        card.buttonMode = true;
        card.click = clickedCard;
    }
}

let firstCard = null;
let secondCard = null;
let allPairs = 8;

function clickedCard() {
    const clickedItem = this;

    if (firstCard === null) {
        firstCard = clickedItem;

        switch (clickedItem.col) {
            case 1:
                firstCard.addChild(PIXI.Sprite.from('./assets/rsz_1star.png'));
                break;
            case 2:
                firstCard.addChild(PIXI.Sprite.from('./assets/rsz_clock.png'));
                break;
            case 3:
                firstCard.addChild(PIXI.Sprite.from('./assets/rsz_firefox.png'));
                break;
            case 4:
                firstCard.addChild(PIXI.Sprite.from('./assets/rsz_lego.png'));
                break;
            case 5:
                firstCard.addChild(PIXI.Sprite.from('./assets/rsz_mac.png'));
                break;
            case 6:
                firstCard.addChild(PIXI.Sprite.from('./assets/rsz_print.png'));
                break;
            case 7:
                firstCard.addChild(PIXI.Sprite.from('./assets/rsz_spotify.png'));
                break;
            case 8:
                firstCard.addChild(PIXI.Sprite.from('./assets/rsz_timer.png'));
                break;
        }
    } else if (secondCard === null && firstCard !== clickedItem) {
        secondCard = clickedItem;

        switch (clickedItem.col) {
            case 1:
                secondCard.addChild(PIXI.Sprite.from('./assets/rsz_1star.png'));
                break;
            case 2:
                secondCard.addChild(PIXI.Sprite.from('./assets/rsz_clock.png'));
                break;
            case 3:
                secondCard.addChild(PIXI.Sprite.from('./assets/rsz_firefox.png'));
                break;
            case 4:
                secondCard.addChild(PIXI.Sprite.from('./assets/rsz_lego.png'));
                break;
            case 5:
                secondCard.addChild(PIXI.Sprite.from('./assets/rsz_mac.png'));
                break;
            case 6:
                secondCard.addChild(PIXI.Sprite.from('./assets/rsz_print.png'));
                break;
            case 7:
                secondCard.addChild(PIXI.Sprite.from('./assets/rsz_spotify.png'));
                break;
            case 8:
                secondCard.addChild(PIXI.Sprite.from('./assets/rsz_timer.png'));
                break;
        }
    }

    if (firstCard.col === secondCard.col) {
        console.log('Success! Founded Pair!')

        if (allPairs !== 1) {
            allPairs--;
            setTimeout(hideCards, 1000);
            console.log('Pair ' + allPairs);
        } else {
            console.log('You win!')
            app.stage.remove(gameContainer);
        }
    } else {
        console.log('No pair!');
        setTimeout(reset, 1000);
    }
}

function hideCards() {
    gameContainer.removeChild(firstCard);
    gameContainer.removeChild(secondCard);
    firstCard = null;
    secondCard = null;
}

function reset() {
    firstCard.addChild(PIXI.Sprite.from('./assets/rsz_avocado.png'));
    secondCard.addChild(PIXI.Sprite.from('./assets/rsz_avocado.png'));
    firstCard = null;
    secondCard = null;
}












