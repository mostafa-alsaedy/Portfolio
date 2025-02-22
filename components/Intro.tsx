"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useActiveSectionContext } from '@/context/ActiveSection'
import { useSectionInView } from '@/lib/hooks'


export default function Intro() {
    const { ref } = useSectionInView("Home")

    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
    return (
        <>
            <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
                <div className='flex justify-center items-center'>
                    <div className='relative'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "tween", duration: 0.2 }}>
                            <Image
                                src={'/IMG.jpg'}
                                alt='avatar'
                                width={100}
                                height={100}
                                quality={100}
                                priority={true}
                                className='rounded-full w-24 h-24
                                object-cover border-[0.35rem] border-white
                                shadow-xl '/>
                        </motion.div>

                        <motion.span className='text-4xl absolute bottom-0 right-0'
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}>
                            👋🏼
                        </motion.span>
                    </div>
                </div>
                <motion.h1
                    className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}>
                    <span className="font-bold">Hello, I'm Mostafa,</span> a{" "}
                    <span className="font-bold">front-end developer</span> with{" "}
                    <span className="font-bold">two years</span> of experience. I specialize in building{" "}
                    <span className="italic">modern, high-performance websites and applications</span>, with a focus on{" "}
                    <span className="underline">React and Next.js</span>.
                </motion.h1>
                <motion.div className='flex flex-col sm:flex-row gap-4 justify-center items-center 
                px-4 text-lg font-medium'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}>
                    <Link
                        className='group bg-gray-900 text-white px-7 
                    py-3 flex items-center gap-2 rounded-full outline-none
                    focus:scale-110 hover:scale-110 hover:bg-gray-950 
                    active:scale-105 transition-all'
                        href="#contact"
                        onClick={() => {
                            setActiveSection("Contact")
                            setTimeOfLastClick(Date.now())
                        }}>Contact me here
                        <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition duration-[400ms]' /> {""}
                    </Link>
                    <a className='group bg-white px-7 
                    py-3 flex items-center gap-2 rounded-full outline-none
                    focus:scale-110 hover:scale-110
                    active:scale-105 transition-all cursor-pointer border
                    border-black/10 dark:bg-white/10 dark:hover:bg-white/20'
                        href='/Mostafa-Alsaedy-FrontendReactDeveloperCV.pdf'
                        download>
                        Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition duration-[400ms]' /> {""}
                    </a>

                    <a className='bg-white p-4 text-gray-700 
                    py-3 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]
                    active:scale-105 transition-all cursor-pointer border
                    border-black/10 hover:text-gray-950 dark:bg-white/10 dark:hover:bg-white/20 dark:text-gray-200'
                        href='https://www.linkedin.com/in/mostafaalsaedy/' target='_blank'>
                        <BsLinkedin />
                    </a>

                    <a className='bg-white p-4 text-gray-700 
                    py-3 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]
                    active:scale-105 transition-all cursor-pointer border 
                    border-black/10 hover:text-gray-950 dark:bg-white/10 dark:hover:bg-white/20 dark:text-gray-200'
                        href='https://github.com/mostafa-alsaedy' target='_blank'>
                        <FaGithubSquare />
                    </a>
                </motion.div>
            </section>

        </>
    )
}
