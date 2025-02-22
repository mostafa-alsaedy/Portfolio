"use client"
import React from 'react'
import SectionHeading from './SectionHeading';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/ThemeContext';

export default function Experience() {
    const {ref} = useSectionInView("Experience")
    const {theme} = useTheme();

    return (
        <>
        <section id="experience" ref={ref} className='mb-28 scroll-mt-28'>
            <SectionHeading>Experience</SectionHeading>
            <VerticalTimeline lineColor= {theme === "dark" ? "#1f2937" : "#e5e7eb"}>
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                    <VerticalTimelineElement contentStyle={{
                        background: theme === "dark" ? "#1f2937" : "#f3f4f6",
                        boxShadow: "none",
                        border: "1px solid rgba(0,0,0,0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem"
                    }}
                    contentArrowStyle={{
                        borderRight: theme === "dark" ? "0.4rem solid rgba(255,255,255,0.5)" : "0.4rem solid #9ca3af"
                    }}
                    date={item.date}
                    icon={item.icon}
                    iconStyle={{
                        background: theme === "dark" ? "#1f2937" : "#f3f4f6",
                        color: "#1.5rem"
                    }}
                    >
                        <h3 className='font-semibold capitalize'>{item.title}</h3>
                        <p className='font-normal !mt-0'>{item.location}</p>
                        <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{item.description}</p>
                    </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
        </>
    )
}
