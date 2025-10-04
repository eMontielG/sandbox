import type { BoundingBox } from '../interfaces/bounding-box'
import type { Collidable } from '../interfaces/collidable'
import type { RectConfig } from '../interfaces/configs/rect-config'
import type { Drawable } from '../interfaces/drawable'
import type { Renderer } from '../interfaces/renderer'

export class Wall implements Collidable, Drawable {
  private fill: string
  private height: number
  private width: number
  private x: number
  private y: number
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
  getBoundingBox(): BoundingBox {
    return { x: this.x, y: this.y, width: this.width, height: this.height }
  }
}
