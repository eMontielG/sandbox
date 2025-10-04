import { Wall } from './wall'
import type { BoundingBox } from '../interfaces/bounding-box'
import type { Collidable } from '../interfaces/collidable'
import type { CollisionReactive } from '../interfaces/collision-reactive'
import type { CircleConfig } from '../interfaces/configs/circle-config'
import type { Drawable } from '../interfaces/drawable'
import type { Renderer } from '../interfaces/renderer'
import type { Updatable } from '../interfaces/updatable'

export class Ball implements CollisionReactive, Drawable, Updatable {
  private fill: string
  private radius: number
  private velocityX: number = 2
  private velocityY: number = -2
  private x: number
  private y: number
  constructor({ fill, radius, x, y }: CircleConfig) {
    this.fill = fill
    this.radius = radius
    this.x = x
    this.y = y
  }
  draw(renderer: Renderer): void {
    renderer.drawCircle({ fill: this.fill, radius: this.radius, x: this.x, y: this.y })
  }
  getBoundingBox(): BoundingBox {
    return { height: this.radius * 2, width: this.radius * 2, x: this.x - this.radius, y: this.y - this.radius }
  }
  handleCollision(other: Collidable): void {
    const ballBoundingBox = this.getBoundingBox()
    const otherBoundingBox = other.getBoundingBox()

    const ballLeft = ballBoundingBox.x
    const ballRight = ballBoundingBox.x + ballBoundingBox.width
    const ballTop = ballBoundingBox.y
    const ballBottom = ballBoundingBox.y + ballBoundingBox.height

    const otherLeft = otherBoundingBox.x
    const otherRight = otherBoundingBox.x + otherBoundingBox.width
    const otherTop = otherBoundingBox.y
    const otherBottom = otherBoundingBox.y + otherBoundingBox.height

    const overlapLeft = ballRight - otherLeft
    const overlapRight = otherRight - ballLeft
    const overlapTop = ballBottom - otherTop
    const overlapBottom = otherBottom - ballTop

    const minOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom)

    if (other instanceof Wall) {
      if (minOverlap === overlapLeft) {
        this.velocityX *= -1
        this.x = otherLeft - this.radius
      } else if (minOverlap === overlapRight) {
        this.velocityX *= -1
        this.x = otherRight + this.radius
      } else if (minOverlap === overlapTop) {
        this.velocityY *= -1
        this.y = otherTop - this.radius
      } else if (minOverlap === overlapBottom) {
        this.velocityY *= -1
        this.y = otherBottom + this.radius
      }
    }
  }
  update(): void {
    this.x += this.velocityX
    this.y += this.velocityY
  }
}
