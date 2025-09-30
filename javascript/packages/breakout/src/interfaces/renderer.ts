import type { RectConfig } from './configs/rect-config'

export interface Renderer {
  clear(): void
  drawRect(config: RectConfig): void
}
