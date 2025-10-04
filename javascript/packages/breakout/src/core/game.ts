import { CollisionManager } from './collision-manager'
import { EntityManager } from './entity-manager'
import type { Entity } from '../interfaces/entity'
import type { Renderer } from '../interfaces/renderer'
import type { GameConfig } from '../interfaces/configs/game-config'

export class Game {
  private collisionManager: CollisionManager
  private entityManager: EntityManager
  private entities: Entity[] = []
  private renderer: Renderer
  constructor({ collisionManager, entityManager, entities, renderer }: GameConfig) {
    this.collisionManager = collisionManager
    this.entityManager = entityManager
    this.entities = entities
    this.renderer = renderer
    for (const entity of this.entities) {
      this.entityManager.addEntity(entity)
    }
  }
  start(): void {
    requestAnimationFrame(this.loop)
  }
  private draw(): void {
    this.renderer.clear()
    for (const entity of this.entityManager.drawables) entity.draw(this.renderer)
  }
  private loop = (): void => {
    this.update()
    this.collisionManager.checkCollision(this.entityManager.collidables)
    this.draw()
    requestAnimationFrame(this.loop)
  }
  private update() {
    for (const entity of this.entityManager.updatables) entity.update()
  }
}
