import './style.css'

import { CanvasRenderer } from './core/canvas-renderer'
import { CollisionManager } from './core/collision-manager'
import { EntityManager } from './core/entity-manager'
import { Game } from './core/game'
import { Ball } from './entities/ball'
import { Paddle } from './entities/paddle'
import { Wall } from './entities/wall'
import type { Entity } from './interfaces/entity'
import type { Renderer } from './interfaces/renderer'

const BALL_RADIUS = 8
const PADDLE_HEIGHT = 16
const PADDLE_WIDTH = 64
const WALL_WIDTH = 4

const canvas = document.querySelector('canvas')!
const context = canvas.getContext('2d')!
const { height, width } = canvas

const wallEntities: Wall[] = [
  new Wall({ fill: 'blue', height, width: WALL_WIDTH, x: 0, y: 0 }),
  new Wall({ fill: 'blue', height: WALL_WIDTH, width, x: 0, y: 0 }),
  new Wall({ fill: 'blue', height, width: WALL_WIDTH, x: width - WALL_WIDTH, y: 0 }),
  new Wall({ fill: 'blue', height: WALL_WIDTH, width, x: 0, y: height - WALL_WIDTH }),
]

const ballEntity = new Ball({
  fill: 'red',
  radius: BALL_RADIUS,
  x: width / 2,
  y: height - PADDLE_HEIGHT - BALL_RADIUS,
})

const paddleEntity = new Paddle({
  fill: 'green',
  height: PADDLE_HEIGHT,
  width: PADDLE_WIDTH,
  x: width / 2 - PADDLE_WIDTH / 2,
  y: height - PADDLE_HEIGHT,
})

const entities: Entity[] = [...wallEntities, paddleEntity, ballEntity]

const collisionManager: CollisionManager = new CollisionManager()
const entityManager: EntityManager = new EntityManager()
const renderer: Renderer = new CanvasRenderer({ context, height, width })

const game: Game = new Game({ collisionManager, entityManager, entities, renderer })

game.start()
