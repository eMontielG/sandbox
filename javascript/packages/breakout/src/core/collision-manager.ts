import type { Collidable } from '../interfaces/collidable'
import { isCollisionReactive } from '../utils/guards/is-collision-reactive'

export class CollisionManager {
  checkCollision(collidables: Collidable[]): void {
    for (let i = 0; i < collidables.length; i++) {
      for (let j = i + 1; j < collidables.length; j++) {
        const a = collidables[i]
        const b = collidables[j]
        if (this.isColliding(a, b)) {
          if (isCollisionReactive(a)) a.handleCollision(b)
          if (isCollisionReactive(b)) b.handleCollision(a)
        }
      }
    }
  }
  private isColliding(a: Collidable, b: Collidable): boolean {
    const A = a.getBoundingBox()
    const B = b.getBoundingBox()

    return !(A.x + A.width < B.x || A.x > B.x + B.width || A.y + A.height < B.y || A.y > B.y + B.height)
  }
}
