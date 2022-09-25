import * as React from 'react'
import * as classnames from 'classnames'

let EMPTY_OBJ   = Object.freeze({}),
    BUTTON      = 'button',
    EMPTY_STR   = '',
    noop        = () => {};

export default function Button(_props) {
    let props               = _props || EMPTY_OBJ,
        Element             = props.as || BUTTON,
        text                = props.text || EMPTY_STR,
        title               = props.title || EMPTY_STR,
        onClick             = props.onClick || noop,
        attributes          = props.attributes,
        children            = props.children,
        propClassName       = props.className || EMPTY_STR,
        overrideClassName   = props.overrideClassName,
        className           = overrideClassName ? propClassName : classnames('relative px-5 py-2.5 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white group-hover:bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 focus:ring-4 focus:outline-none focus:ring-pink-200', propClassName);

    return (
        <Element {...attributes} title={title} className={className} onClick={onClick}>
            { text }
            { children }
        </Element>
    )
}