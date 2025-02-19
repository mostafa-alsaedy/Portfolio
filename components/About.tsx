"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView("About");


    return (
        <>
            <motion.section
                ref={ref}
                className='mb-28 max-w-[45rem] text-center leading-8 sm:text-left sm:mb-40 scroll-mt-28'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                id='about'>
                <SectionHeading>About Me</SectionHeading>
                <p className="mb-3">
                    After earning a degree in <span className="font-medium">Accounting</span>, I followed my passion for programming and completed a coding bootcamp in{" "}
                    <span className="font-medium">frontend web development</span>. What I love most about coding is bringing ideas to life and turning requirements into practical, user-friendly applications while ensuring a seamless and enjoyable user experience. I take pride in implementing every feature with precision, making sure it works exactly as intended.
                    <br /><br />
                    My core stack includes <span className="font-medium">React and Next.js</span>, and I’m also familiar with TypeScript. I’m always eager to learn new technologies and improve my skills. Currently, I’m looking for a{" "}
                    <span className="font-medium">full-time position</span> as a Frontend Web Developer.
                </p>
                <p>
                    <span className="italic">Beyond coding</span>, I enjoy staying active at the gym, watching football matches, and playing mobile games.
                </p>
            </motion.section>
        </>
    )
}
