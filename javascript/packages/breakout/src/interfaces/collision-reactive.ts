import type { Collidable } from './collidable'

export interface CollisionReactive extends Collidable {
  handleCollision(other: Collidable): void
}
