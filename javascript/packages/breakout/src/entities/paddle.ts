import type { Drawable } from '../interfaces/drawable'
import type { Renderer } from '../interfaces/renderer'
import type { RectConfig } from '../interfaces/configs/rect-config'

export class Paddle implements Drawable {
  private fill: string
  private height: number
  private width: number
  x: number
  y: number
  constructor({ fill, height, width, x, y }: RectConfig) {
    this.fill = fill
    this.height = height
    this.width = width
    this.x = x
    this.y = y
  }
  draw(renderer: Renderer): void {
    renderer.drawRect({ fill: this.fill, height: this.height, width: this.width, x: this.x, y: this.y })
  }
}
