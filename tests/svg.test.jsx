import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import Aufgabe01 from '../images/aufgabe-01.svg?react'

describe('SVG', () => {
    test('new svg render method', () => {
        const { container } = render(<Aufgabe01 />)

        expect(container).toBeDefined()

        const c = container.querySelector('#circle')
        expect(c).toBeDefined()
        expect(c.getAttribute('x')).toBe('0')
        expect(c.getAttribute('y')).toBe('0')
    })
})
