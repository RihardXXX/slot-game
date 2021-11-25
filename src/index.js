import Phaser from 'phaser'
import './assets/scss/main.scss'
import background from './assets/images/background.png'

const scene = new Phaser.Scene('Scene')

// 1. Download background
scene.preload = function() {
    // console.log('preload')
    // console.log(this.load)
    this.load.image('bg', background)
}
// 2. Render background
scene.create = function() {
    // console.log('create')
    // position image background
    // если ось рисунка находится в центре
    // const x = this.sys.game.config.width / 2
    // const y = this.sys.game.config.height / 2
    // this.add.sprite(x, y, 'bg')

    // если мы центр изображения принудительно меняем
    this.add.sprite(0, 0, 'bg').setOrigin(0, 0)
}

const config = {
    type: Phaser.AUTO, // webGl default or canvas
    width: 626,
    height: 469,
    scene
}

const game = new Phaser.Game(config)



