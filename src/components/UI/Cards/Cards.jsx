import * as React from 'react'
import * as classnames from 'classnames'

let EMPTY_OBJ   = Object.freeze({}),
    RIGHT       = 'right',
    LEFT        = 'left';

export default function Cards(_props) {
    let props               = _props || EMPTY_OBJ,
        Container           = props.container || 'div',
        attributes          = props.attributes,
        title               = props.title,
        description         = props.description,
        imageUrl            = props.imageUrl,
        direction           = props.direction || LEFT,
        isRightDirection    = direction === RIGHT,
        imageClassName      = classnames('Card__Image order-1 h-48 md:h-auto md:w-48 flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden', {
            'md:order-2' : isRightDirection
        }),
        detailClassName     = classnames('Card__Detail order-2 border-r border-b border-l border-gray-400 md:border-l-0 md:border-t md:border-gray-400 bg-white rounded-b md:rounded-b-none md:rounded-r p-4 flex flex-col justify-between leading-normal grow', {
            'md:order-1' : isRightDirection
        }),
        imageStyles         = {
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        },
        imageContainer      = (
            <div className={imageClassName} style={imageStyles} title={title}>
            </div>
        );

    return (
        <Container {...attributes} className="Card max-w-sm w-full md:max-w-full md:flex">
            { imageContainer }
            <div className={detailClassName}>
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-4xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                </div>
            </div>
        </Container>
    );
}