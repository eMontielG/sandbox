import type { Collidable } from '../../interfaces/collidable'

export function isCollidable(entity: unknown): entity is Collidable {
  return typeof (entity as Collidable).getBoundingBox === 'function'
}
