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
                <div>
                    <div>
                        <div>
                            <p className="mb-3">
                                After earning a degree in <span className="font-medium">Accounting</span>, I shifted to the world of programming, driven by my passion for technology. I completed a coding bootcamp specializing in{" "}
                                <span className="font-medium">front-end web development</span>, where I strengthened my skills in building dynamic and user-friendly applications.
                            </p>
                            <p className="mb-3">
                                I thrive on transforming complex ideas into seamless, intuitive user experiences, whether it’s streamlining a tricky UI challenge or delivering pixel-perfect, efficient code that powers flawless functionality.
                            </p>
                            <p className="mb-3">
                                My core stack includes <span className="font-medium">React and Next.js</span>, and I have experience working with <span className="font-medium">TypeScript</span>. I’m always eager to learn new technologies and improve my skills. Right now, I’m looking for a full-time job as a Frontend Web Developer.
                            </p>
                            <p>
                                <span className="italic">When I’m not coding</span>, you’ll find me deadlifting at the gym, cheering for Manchester United, or strategizing in my latest mobile game obsession.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}
