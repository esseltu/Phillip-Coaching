import { rmSync, mkdirSync, cpSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const dist = resolve(root, 'dist')
const docs = resolve(root, 'docs')

rmSync(docs, { recursive: true, force: true })
mkdirSync(docs, { recursive: true })
cpSync(dist, docs, { recursive: true })
writeFileSync(resolve(docs, '.nojekyll'), '')
console.log('Copied dist -> docs for GitHub Pages branch deployment (main/docs)')
