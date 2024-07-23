import { describe, test, expect, beforeAll, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import Aufgabe01 from '../images/aufgabe-01.svg?react'

class SVG {
    #body

    constructor(component) {
        this.#body = render(component).container
    }

    get body() {
        return this.#body
    }
}

describe('Aufgabe 01', () => {
    const svg = new SVG(<Aufgabe01 />)

    test('Das SVG zur Aufgabe 01 konnte erstellt werden.', () => {
        expect(svg).toBeDefined()
    })

    test('Es gibt ein "<circle>" Element', () => {
        const circle = svg.body.querySelector('circle')
        console.log(circle)
        expect(circle).toBeDefined()
    })

    test('Das "<circle>" Element hat den Mittelpunkt (250, 250)', () => {
        const circle = svg.querySelector('circle')
        console.log(svg.innerHTML)
        expect(circle.getAttribute('cx')).toBe(250)
        expect(circle.getAttribute('cy')).toBe(250)
    })
})
