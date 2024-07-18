import Documentation from './another'

/**
 * Das ist nur eine Funktion um Dokumentation zu testen.
 */
export function welcome() {
    let tmp = new Documentation()
    let test = tmp.something

    const text = 'Hello World!'
    console.log(text)
}

welcome()
