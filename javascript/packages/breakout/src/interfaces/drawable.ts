import type { Renderer } from '../interfaces/renderer'

export interface Drawable {
  draw(renderer: Renderer): void
}
