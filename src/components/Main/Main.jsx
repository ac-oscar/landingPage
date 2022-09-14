import React, { useCallback, useEffect, useState } from 'react'
import { Carousel, Carousel__Slide } from '../UI/Carousel'
import { Card } from '../UI/Cards'
import { Modal } from '../UI/Modal'
import { StaticImage } from "gatsby-plugin-image"
import { CAROUSEL_IMAGES, SERVICES } from '../../utils'
import './Main.css'

let EMPTY_OBJ   = Object.freeze({}),
    FALSE       = false,
    TRUE        = true;

export default function Main() {
    let [displayModal, setDisplayModal] = useState(FALSE),
        onCloseModal                    = useCallback(() => {
            setDisplayModal(FALSE);
        }, []);

    useEffect(() => {
        let interval = setTimeout(() => {
            setDisplayModal(TRUE);
        }, 6000);

        return () => clearTimeout(interval)
    }, []);

    return (
        <main className="container mx-auto px-px">
            {/* { displayModal && <Modal onCloseModal={onCloseModal} /> } */}
            <section id="inicio" className="px-4">
                <div className="Image_Container p-8 flex justify-around items-center flex-col rounded-md">
                    <h2 className="Header text-center text-6xl md:text-8xl font-semibold">
                        <span className="opacity-0">Amarres,{' '}</span>
                        <span className="opacity-0">Retornos,{' '}</span>
                        <span className="opacity-0">Embrujos,{' '}</span>
                        <span className="opacity-0">Parejas</span>
                    </h2>
                    <p className="mt-10 text-3xl md:text-4xl">
                        todos nuestros trabajos son totalmente realizados por personas expertas en nigromancia y hechizos ancestrales que se nos han entregado para así poder seguir ayudadando a todas las personas que necesitan nuestra ayuda
                    </p>
                </div>
            </section>
            <section id="servicios" className="px-4 mt-10 flex justify-center items-center flex-col">
                <h2 className="text-5xl font-semibold">SERVICIOS</h2>
                <div className="grid gap-4 grid-cols-1 xl:grid-cols-2 mt-6">
                    {
                        SERVICES.map((_service) => {
                            let service = _service || EMPTY_OBJ;

                            return (
                                <Card
                                    title       = {service.title}
                                    description = {service.description}
                                    direction   = {service.direction}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <section id="testimonios" className="px-4 mt-10 flex justify-center items-center flex-col">
                <h2 className="text-5xl font-semibold">TESTIMONIOS</h2>
                <p className="my-2.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="my-2.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="my-2.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="my-2.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="my-2.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>
            <section id="metodos_de_pago" className="px-4 mt-10 flex justify-center items-center flex-col">
                <h2 className="text-5xl font-semibold">MÉTODOS DE PAGO</h2>
                <p className="my-2.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="my-2.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="my-2.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="my-2.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="my-2.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>
        </main>
    )
}