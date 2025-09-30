import type { CircleConfig } from '../interfaces/configs/circle-config'
import type { Drawable } from '../interfaces/drawable'
import type { Renderer } from '../interfaces/renderer'

export class Ball implements Drawable {
  private fill: string
  private radius: number
  x: number
  y: number
  constructor({ fill, radius, x, y }: CircleConfig) {
    this.fill = fill
    this.radius = radius
    this.x = x
    this.y = y
  }
  draw(renderer: Renderer): void {
    renderer.drawCircle({ fill: this.fill, radius: this.radius, x: this.x, y: this.y })
  }
}
