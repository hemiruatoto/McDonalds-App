/** @module helpers */

/**
 * Logs a styled message to the console.
 * @param {string} style 
 * @param {string} message 
 */
export function consoleAlert(style, message) {
    if (typeof(style) != 'string' || typeof(message) != 'string') return;

    const layoutStyle = 'padding: 0.1rem 0.3rem 0.2rem;'
    const successStyle = 'color:  seagreen; ' + layoutStyle;
    const warnStyle = 'color: orange; ' + layoutStyle;
    const errorStyle = 'color: crimson; ' + layoutStyle;
    const infoStyle = 'color: dodgerblue; ' + layoutStyle;

    switch (style) {
        case 'success':
            console.log(`%c${message}`, successStyle);
            break;
        case 'warn':
            console.log(`%c${message}`, warnStyle);
            break;
        case 'error':
            console.log(`%c${message}`, errorStyle);
            break;
        default:
            console.log(`%c${message}`, infoStyle);
    }
}