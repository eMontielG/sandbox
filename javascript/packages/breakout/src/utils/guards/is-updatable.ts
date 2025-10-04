import type { Updatable } from '../../interfaces/updatable'

export function isUpdatable(entity: unknown): entity is Updatable {
  return typeof (entity as Updatable).update === 'function'
}
