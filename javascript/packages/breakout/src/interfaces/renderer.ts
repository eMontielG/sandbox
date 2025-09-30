import type { CircleConfig } from './configs/circle-config'
import type { RectConfig } from './configs/rect-config'

export interface Renderer {
  clear(): void
  drawCircle(config: CircleConfig): void
  drawRect(config: RectConfig): void
}
