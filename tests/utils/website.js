import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

/**
 * Erstellt den virtuellen DOM von einer Webseite, um zu testen ob HTML-Elemente
 * existieren und gewisse Eigenschaften erfüllen.
 */
export default class Website {
    #body

    /**
     * Erstellt den virtuellen DOM von einer HTML Datei.
     */
    constructor(filename) {
        const html = fs.readFileSync(
            path.resolve(process.cwd(), filename),
            'utf8'
        )
        const dom = new JSDOM(html)
        this.#body = dom.window.document.body
    }

    /**
     * Get the body of the HTML-DOM.
     */
    get body() {
        return this.#body
    }
}
