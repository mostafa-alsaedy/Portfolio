"use client";
import { skillsData } from '@/lib/data'
import React from 'react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

export default function Skills() {

    const { ref } = useSectionInView("Skills", 0.5)
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.05 * index,
            }
        })
    }
    return (
        <>
            <section id='skills' ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
                <SectionHeading>Skills</SectionHeading>
                <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                    {skillsData.map((skill, index) => (
                        <motion.li
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            custom={index}
                            viewport={{once: true}}
                            key={index} className='bg-white border border-black/[0.1] rounded-xl 
                            px-5 py-3 dark:bg-white/10 dark:text-white/80'>{skill}</motion.li>
                    ))}
                </ul>
            </section>
        </>
    ) 
}
