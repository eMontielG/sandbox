import type { Collidable } from '../interfaces/collidable'
import type { Drawable } from '../interfaces/drawable'
import type { Entity } from '../interfaces/entity'
import type { Updatable } from '../interfaces/updatable'
import { isCollidable } from '../utils/guards/is-collidable'
import { isDrawable } from '../utils/guards/is-drawable'
import { isUpdatable } from '../utils/guards/is-updatable'

export class EntityManager {
  drawables: Drawable[] = []
  updatables: Updatable[] = []
  collidables: Collidable[] = []
  addEntity(entity: Entity) {
    if (isCollidable(entity)) this.collidables.push(entity)
    if (isDrawable(entity)) this.drawables.push(entity)
    if (isUpdatable(entity)) this.updatables.push(entity)
  }
}
