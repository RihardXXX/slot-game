import Phaser from 'phaser'
import './assets/scss/main.scss'

import background from './assets/images/background.png'
import card from './assets/images/card.png'



const scene = new Phaser.Scene('Scene')

// 1. Download background
scene.preload = function() {
    this.load.image('bg', background)
    this.load.image('card', card)
}
// 2. Render background
scene.create = function() {
    // если мы центр изображения принудительно меняем
    this.add.sprite(0, 0, 'bg').setOrigin(0, 0)

    scene.getCardPositions().forEach(({x, y}) => {
        this.add.sprite(x, y, 'card').setOrigin(0, 0)
    })
}

// array coordinates card
scene.getCardPositions = function() {

    // position cart array
    let positions = []

    // size card
    const { width, height } = this.textures.get('card').getSourceImage()
    const cardWidth = width + 5
    const cardHeight = height + 5


    //margin
    const widthArea = this.sys.game.config.width
    const heightArea = this.sys.game.config.height
    const offsetX = (widthArea - (cardWidth * config.cols)) / 2
    const offsetY = (heightArea -(cardHeight * config.rows)) / 2

    console.log(offsetX)

    // area for card
    for (let row = 0; row < config.rows; row++) {
        for (let col = 0; col < config.cols; col++) {
            positions.push({
                x: offsetX + (col * cardWidth),
                y: offsetY + (row * cardHeight)
            })
        }
    }

    console.log('positions: ', positions)

    return positions
}

const config = {
    type: Phaser.AUTO, // webGl default or canvas
    width: 1280,
    height: 720,
    rows: 2,
    cols: 5,
    scene
}

const game = new Phaser.Game(config)



