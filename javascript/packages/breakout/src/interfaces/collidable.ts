import type { BoundingBox } from './bounding-box'

export interface Collidable {
  getBoundingBox(): BoundingBox
}
