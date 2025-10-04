import type { Collidable } from '../../interfaces/collidable'
import type { CollisionReactive } from '../../interfaces/collision-reactive'

export function isCollisionReactive(entity: Collidable): entity is CollisionReactive {
  return 'handleCollision' in entity && typeof (entity as CollisionReactive).handleCollision === 'function'
}
