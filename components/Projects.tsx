"use client"

import React from 'react'
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import Project from './Project';
import { useSectionInView } from '@/lib/hooks';



export default function Projects() {

    const {ref} = useSectionInView("Projects", 0.2)


    return (
        <>
            <section id='projects' ref={ref}  className='scroll-mt-28 mb-28' >
                <SectionHeading>My Projects</SectionHeading>
                <div>
                    {projectsData.map((project, index) => (
                        <Project {...project} key={index} />
                    ))}
                </div>
            </section>
        </>
    )
}


