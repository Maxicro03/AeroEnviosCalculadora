import { hashSync, compareSync, genSaltSync } from 'bcrypt'

export function hash(password) {
  return hashSync(password, genSaltSync(10))
}

export function hashedComprobation(geted, saved) {
  return compareSync(geted, saved)
}