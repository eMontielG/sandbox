import { Collidable } from './collidable'
import { Drawable } from './drawable'
import { Updatable } from './updatable'

export type Entity = Collidable | Drawable | Updatable
