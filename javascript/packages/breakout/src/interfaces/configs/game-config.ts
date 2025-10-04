import { CollisionManager } from '../../core/collision-manager'
import { EntityManager } from '../../entity-manager'
import type { Entity } from '../entity'
import type { Renderer } from '../renderer'

export type GameConfig = {
  collisionManager: CollisionManager
  entityManager: EntityManager
  entities: Entity[]
  renderer: Renderer
}
