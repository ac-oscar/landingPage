import * as React from 'react'
import * as classnames from 'classnames'

let EMPTY_OBJ           = Object.freeze({}),
    DEFAULT_SECTION_ID  = '';

export default function Section(_props) {
    let props       = _props || EMPTY_OBJ,
        sectionId   = props.sectionId || DEFAULT_SECTION_ID,
        className   = classnames('Section', props.className),
        children    = props.children;

    return (
        <section id={sectionId} className={className}>
            { children }
        </section>
    );
}

export function Section__Header(_props) {
    let props       = _props || EMPTY_OBJ,
        className   = classnames('Section__Header', props.className),
        children    = props.children;

    return (
        <h2 className={className}>
            {children}
        </h2>
    );
}

export function Section__Content(_props) {
    let props       = _props || EMPTY_OBJ,
        className   = classnames('Section__Content', props.className),
        children    = props.children;

    return (
        <div className={className}>
            {children}
        </div>
    );
}