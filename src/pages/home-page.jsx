import React from 'react'
import logo from '../assets/img/logo.png'
import { ContactUs } from '../cmps/contact-us'
import { Experience } from '../cmps/experience'
import { Footer } from '../cmps/footer'
import { Intro } from '../cmps/intro'
import { Welcome } from '../cmps/welcom'

export function HomePage() {
  
    return (
        <>
            <Welcome/>
            <Intro/>
            <Experience />
            <ContactUs />
            <Footer />
        </>
    )
}