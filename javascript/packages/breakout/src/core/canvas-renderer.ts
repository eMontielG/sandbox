import type { CanvasConfig } from '../interfaces/configs/canvas-config'
import type { RectConfig } from '../interfaces/configs/rect-config'
import type { Renderer } from '../interfaces/renderer'

export class CanvasRenderer implements Renderer {
  private context: CanvasRenderingContext2D
  private height: number
  private width: number
  constructor({ context, height, width }: CanvasConfig) {
    this.context = context
    this.height = height
    this.width = width
  }
  clear(): void {
    this.context.clearRect(0, 0, this.width, this.height)
  }
  drawRect({ fill, height, width, x, y }: RectConfig): void {
    this.context.fillStyle = fill
    this.context.fillRect(x, y, width, height)
  }
}
