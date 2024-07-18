import { beforeEach, describe, expect, test } from 'vitest'
import Website from './utils/website.js'

describe('index.html', () => {
    let body

    beforeEach(() => {
        body = new Website('index.html').body
    })

    test('Die Webseite hat ein <h1>-Tag.', () => {
        const elem = body.querySelector('h1')
        expect(elem).toBeDefined()
    })

    test("Das <h1>-Tag hat den Inhalt 'Hello World'", () => {
        const elem = body.querySelector('h1')
        expect(elem.textContent).toBe('Hello World!')
    })
})
