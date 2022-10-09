import React, { useCallback, useEffect, useState } from 'react'
import { Carousel, Carousel__Slide } from '../UI/Carousel'
import { Card } from '../UI/Cards'
import { Modal } from '../UI/Modal'
import { Button } from '../UI/Button'
import { Section, Section__Header, Section__Content } from '../UI/Section'
import { StaticImage } from "gatsby-plugin-image"
import { SERVICES, VIDEO_TESTIMONIALS, TEXT_TESTIMONIALS } from '../../utils'
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
            { displayModal && <Modal onCloseModal={onCloseModal} /> }
            <Section sectionId="inicio" className="px-4">
                <div className="Image_Container p-8 flex justify-around items-center flex-col rounded-md">
                    <Section__Header className="Header text-center text-6xl md:text-8xl font-semibold">
                        <span className="opacity-0">Amarres,{' '}</span>
                        <span className="opacity-0">Retornos,{' '}</span>
                        <span className="opacity-0">Embrujos,{' '}</span>
                        <span className="opacity-0">Parejas</span>
                    </Section__Header>
                    <Section__Content>
                        <p className="mt-10 text-3xl md:text-5xl">
                            todos nuestros trabajos son totalmente realizados por personas expertas en nigromancia y hechizos ancestrales que se nos han entregado para así poder seguir ayudadando a todas las personas que necesitan nuestra ayuda
                        </p>
                    </Section__Content>
                </div>
            </Section>
            <Section sectionId="servicios" className="px-4 mt-10 flex justify-center items-center flex-col">
                <Section__Header className="text-5xl font-semibold">SERVICIOS</Section__Header>
                <Section__Content className="grid gap-4 grid-cols-1 mt-6">
                    {
                        SERVICES.map((_service) => {
                            let service = _service || EMPTY_OBJ;

                            return (
                                <Card
                                    title       = {service.title}
                                    description = {service.description}
                                    direction   = {service.direction}
                                    imageUrl    = {service.imageUrl}
                                />
                            )
                        })
                    }
                </Section__Content>
                <Section__Content className="flex justify-center md:justify-between mt-10 w-full">
                    <Button as="a" className="hidden md:block" attributes={{ href: 'https://api.whatsapp.com/send?phone=13476921302', target: '_blank' }} text="Chatea con nosotros" title="Chatea con nosotros"/>
                    <Button as="a" attributes={{ href: 'https://api.whatsapp.com/send?phone=13476921302', target: '_blank' }} text="Chatea con nosotros" title="Chatea con nosotros"/>
                </Section__Content>
            </Section>
            <Section sectionId="testimonios" className="px-4 mt-10 flex justify-center items-center flex-col">
                <Section__Header className="text-5xl font-semibold">TESTIMONIOS</Section__Header>
                <Section__Content className="grid gap-9 grid-cols-1 lg:grid-cols-2 mt-6 w-full">
                    {
                        VIDEO_TESTIMONIALS.map(_testimony => {
                            let testimony = _testimony || EMPTY_OBJ;

                            return (
                                <div className="w-full">
                                    { testimony.video }
                                </div>
                            )
                        })
                    }
                    <div className="w-full flex justify-center">
                        <StaticImage src="../../images/IMG-20220915-WA0045.jpg" alt="Testimonio" height={400} className="imageTestimonial"/>
                    </div>
                </Section__Content>
                <Section__Content className="hidden md:block mt-20 w-full flex justify-center items-center">
                    <Carousel>
                        {
                            TEXT_TESTIMONIALS.map(_testimony => {
                                let testimony = _testimony || EMPTY_OBJ;

                                return (
                                    <Carousel__Slide>
                                        <p className="w-3/4 lg:w-1/2 h-72 text-center items-center justify-center flex border-4 border-red-500 p-4">
                                            { testimony.text }
                                        </p>
                                    </Carousel__Slide>
                                )
                            })
                        }
                    </Carousel>
                </Section__Content>
                <Section__Content className="flex justify-center md:justify-between mt-10 w-full">
                    <Button as="a" className="hidden md:block" attributes={{ href: 'https://api.whatsapp.com/send?phone=13476921302', target: '_blank' }} text="Qué estás esperando?" title="Qué estás esperando?"/>
                    <Button as="a" attributes={{ href: 'https://api.whatsapp.com/send?phone=13476921302', target: '_blank' }} text="Qué estás esperando?" title="Qué estás esperando?"/>
                </Section__Content>
            </Section>
        </main>
    )
}