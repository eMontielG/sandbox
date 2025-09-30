import './style.css'

import { CanvasRenderer } from './core/canvas-renderer'
import { Game } from './core/game'
import { Paddle } from './entities/paddle'
import { Ball } from './entities/ball'
import type { Renderer } from './interfaces/renderer'

const BALL_RADIUS = 8
const PADDLE_HEIGHT = 16
const PADDLE_WIDTH = 64

const canvas = document.querySelector('canvas')!

const context = canvas.getContext('2d')!

const entities = [
  new Paddle({
    fill: 'black',
    height: PADDLE_HEIGHT,
    width: PADDLE_WIDTH,
    x: canvas.width / 2 - PADDLE_WIDTH / 2,
    y: canvas.height - PADDLE_HEIGHT,
  }),
  new Ball({
    fill: 'black',
    radius: BALL_RADIUS,
    x: canvas.width / 2,
    y: canvas.height - PADDLE_HEIGHT - BALL_RADIUS,
  }),
]

const renderer: Renderer = new CanvasRenderer({
  context,
  height: canvas.height,
  width: canvas.width,
})

const game = new Game({
  entities,
  renderer,
})

game.start()
