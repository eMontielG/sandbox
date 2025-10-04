import type { Drawable } from '../../interfaces/drawable'

export function isDrawable(entity: unknown): entity is Drawable {
  return typeof (entity as Drawable).draw === 'function'
}
