"use client";
import React, { useEffect } from 'react'
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import Project from './Project';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/ActiveSection';
import { useSectionInView } from '@/lib/hooks';


export default function Projects() {

    const {ref} = useSectionInView("Projects", 0.5)

    return (
        <>
            <section id='projects' className='scroll-mt-28 mb-28' ref={ref}>
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


