import { describe, expect, test, beforeEach } from 'vitest'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

describe('index.html', () => {
    const html = fs.readFileSync(
        path.resolve(__dirname, '../index.html'),
        'utf8'
    )

    let dom
    let container

    beforeEach(() => {
        // Constructing a new JSDOM with this option is the key
        // to getting the code in the script tag to execute.
        // This is indeed dangerous and should only be done with trusted content.
        // https://github.com/jsdom/jsdom#executing-scripts
        dom = new JSDOM(html)
        container = dom.window.document.body
    })

    test('Is true', () => {
        expect(true).toBe(true)
    })

    test('There is an <h1>-Tag', () => {
        const elem = container.querySelector('h1')

        expect(elem).toBeDefined()
        expect(elem.textContent).toBe('Hello World!')
    })
})
