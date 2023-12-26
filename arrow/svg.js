/**
 * inspired by [ink](https://github.com/hyrious/ink) written by hyrious
 */
import { input } from './input.js'
import { Arrow } from './arrow.js'
import { svg } from './common.js'

export class DrawPath {
    el = null
    targetEvent = null
    path = null
    createPath = null

    constructor({ el, createPath }) {
        this.el = el

        this.targetEvent = input(this.el, {
            start: this.start.bind(this),
            update: this.update.bind(this),
            finish: this.finish.bind(this)
        })

        this.createPath = createPath
    }

    start() {
        this.path = this.createPath()

        if (this.el && this.path) {
            this.el.append(this.path.path)
        }
    }

    update(ev) {
        const { offsetX: x, offsetY: y } = ev

        if (this.path) {
            this.path.update({ x, y })
        }
    }

    finish() {
        this.path = null
    }

    setColor(color) {
        this.color = color
    }

    destroy() {
        if (this.targetEvent) {
            this.targetEvent.unsubscribe()
        }

        this.el = null
    }
}

export class DrawArrow extends DrawPath {
    constructor(el) {
        super({
            el,
            createPath: () => new Arrow(svg('path'))
        })
    }
}

new DrawArrow(document.querySelector('#svg'))
