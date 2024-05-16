export const tmp = 123

export function h(type: any, props: any, ...children: (CS.OneJS.Dom.Dom | string)[]): CS.OneJS.Dom.Dom {
    const element = typeof type === "string" ? document.createElement(type) : type;

    // Assign properties to the element
    for (const [key, value] of Object.entries(props || {})) {
        if (key.startsWith("on") && typeof value === "function") {
            element.addEventListener(key.substring(2).toLowerCase(), value);
        } else if (key === "style" && typeof value === "object") {
            Object.assign(element.style, value);
        } else {
            element.setAttribute(key, value);
        }
    }

    // Append children
    for (const child of children) {
        if (typeof child === "string") {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    }

    return element;
}