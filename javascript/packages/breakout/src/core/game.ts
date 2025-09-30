import type { GameConfig } from '../interfaces/configs/game-config'
import type { Drawable } from '../interfaces/drawable'
import type { Renderer } from '../interfaces/renderer'

export class Game {
  private entities: Drawable[] = []
  private renderer: Renderer
  constructor({ entities, renderer }: GameConfig) {
    this.entities = entities
    this.renderer = renderer
  }
  start(): void {
    requestAnimationFrame(this.loop)
  }
  private loop = (): void => {
    this.renderer.clear()
    for (const entity of this.entities) entity.draw(this.renderer)
    requestAnimationFrame(this.loop)
  }
}
