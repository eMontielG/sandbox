import type { Drawable } from '../drawable'
import type { Renderer } from '../renderer'

export type GameConfig = {
  entities: Drawable[]
  renderer: Renderer
}
