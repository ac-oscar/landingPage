import React, { useState, useEffect, useCallback, useRef, Children } from "react";
import * as classnames from 'classnames'
import './Carousel.css';

let ZERO                    = 0,
    DEFAULT_DELAY           = 4000, //4 segundos
    count                   = ZERO,
    EMPTY_OBJ               = Object.freeze({}),
    EMPTY_ARY               = Object.freeze([]),
    FADE_ANIMATION_CLASS    = 'fade-anim',
    ANIMATION_END           = 'animationend';


export default function Carousel(_props) {
    let props                           = _props || EMPTY_OBJ,
        delay                           = props.delay || DEFAULT_DELAY,
        children                        = Children.toArray(props.children) || [],
        childrenLength                  = children.length || ZERO,
        [currentIndex, setCurrentIndex] = useState(ZERO),
        carouselInterval                = useRef(),
        carouselRef                     = useRef(),
        carouselSlidesRef               = useRef(),
        removeAnimation                 = useCallback(() => {
            carouselRef.current.classList && carouselRef.current.classList.remove(FADE_ANIMATION_CLASS);
        }, []),
        startCarousel                   = useCallback(() => {
            carouselInterval.current = setInterval(() => {
                handleOnNextClick();
            }, delay);
        }, []),
        updateState                     = useCallback((newState) => {
            setCurrentIndex(newState);
            carouselRef.current.classList && carouselRef.current.classList.add(FADE_ANIMATION_CLASS);
        }, []),
        handleOnNextClick               = useCallback(() => {
            count = (count + 1) % childrenLength;
            updateState(count);
        }, []),
        handleOnPrevClick               = useCallback(() => {
            count = (currentIndex + childrenLength - 1) % childrenLength;
            updateState(count);
        }, []);

    useEffect(() => {
        carouselRef.current.addEventListener &&  carouselRef.current.addEventListener(ANIMATION_END, removeAnimation);
        startCarousel();

        return () => clearInterval(carouselInterval.current);
    }, []);

    return (
        <div ref={carouselRef} className="Carousel w-full select-none relative">
            <div ref={carouselSlidesRef} className="Carousel__Container aspect-w-16 aspect-h-9r">
                { children[currentIndex] }
            </div>

            <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                <button
                    className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                    onClick={handleOnPrevClick}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" width="24" height="24" viewBox="0 0 24 24">
                        <polygon points="15.293 3.293 6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293"/>
                    </svg>
                </button>
                <button
                    className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                    onClick={handleOnNextClick}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" width="24" height="24" viewBox="0 0 24 24">
                        <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
                    </svg>

                </button>
            </div>
        </div>
    );
}

export function Carousel__Slide(_props) {
    let props       = _props || EMPTY_OBJ,
        className   = classnames('Carousel__Slide', props.className),
        children    = props.children;

    return (
        <div className={className}>
            {children}
        </div>
    );
}