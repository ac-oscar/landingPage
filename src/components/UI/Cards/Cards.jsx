import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import './Cards.css'

let EMPTY_OBJ   = Object.freeze({}),
    RIGHT       = 'right',
    LEFT        = 'left';

export default function Cards(_props) {
    let props           = _props || EMPTY_OBJ,
        Container       = props.container || 'div',
        attributes      = props.attributes,
        title           = props.title,
        description     = props.description,
        direction       = props.direction || LEFT,
        imageContainer  = (
            <div className="Card__Image h-48 md:h-auto md:w-48 flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden" title={title}>
            </div>
        );

    return (
        <Container {...attributes} className="Card max-w-sm w-full md:max-w-full md:flex">
            { direction === LEFT && imageContainer }
            <div className="Card__Detail border-r border-b border-l border-gray-400 md:border-l-0 md:border-t md:border-gray-400 bg-white rounded-b md:rounded-b-none md:rounded-r p-4 flex flex-col justify-between leading-normal grow">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-4xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                </div>
            </div>
            { direction === RIGHT && imageContainer }
        </Container>
    );
}