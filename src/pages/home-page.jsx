import React from 'react'
import { ContactUs } from '../cmps/contact-us'
import { Experience } from '../cmps/experience'
import { Footer } from '../cmps/footer'
import { Intro } from '../cmps/intro'
import { Welcome } from '../cmps/welcome/welcome'

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