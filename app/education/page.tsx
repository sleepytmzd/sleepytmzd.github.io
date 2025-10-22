'use client';

import AnimatedContent from "@/components/AnimatedContent";
import { GraduationCap } from "lucide-react";

export default function Page() {
    return (
        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
            <AnimatedContent
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}
                >
                    <header className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold">Education</h1>
            </header>
                </AnimatedContent>
            

            <div className="grid gap-6">

                <AnimatedContent
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0.1}
                >
                    <article className="card p-4 sm:p-6 rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                            <div className="flex items-start md:items-center gap-4">
                                <span className="icon-wrapper"><GraduationCap size={20} /></span>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold">Bangladesh University of Engineering and Technology (BUET)</h3>
                                    <div className="muted text-sm">B.Sc in Computer Science and Engineering</div>
                                </div>
                            </div>

                            <div className="mt-2 md:mt-0">
                                <div className="text-sm font-medium muted">2022 — Present</div>
                            </div>
                        </div>

                    </article>
                </AnimatedContent>

                <AnimatedContent
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0.2}
                >
                    <article className="card p-4 sm:p-6 rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                            <div className="flex items-start md:items-center gap-4">
                                <span className="icon-wrapper"><GraduationCap size={20} /></span>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold">Notre Dame College, Dhaka</h3>
                                    <div className="muted text-sm">Higher Secondary Certificate (HSC)</div>
                                </div>
                            </div>

                            <div className="mt-2 md:mt-0">
                                <div className="text-sm font-medium muted">2019 — 2021</div>
                            </div>
                        </div>

                    </article>
                </AnimatedContent>

                <AnimatedContent
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0.3}
                >
                    <article className="card p-4 sm:p-6 rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                            <div className="flex items-start md:items-center gap-4">
                                <span className="icon-wrapper"><GraduationCap size={20} /></span>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold">Rajuk Uttara Model College</h3>
                                    <div className="muted text-sm">Secondary School Certificate (SSC)</div>
                                </div>
                            </div>

                            <div className="mt-2 md:mt-0">
                                <div className="text-sm font-medium muted">2014 — 2019</div>
                            </div>
                        </div>
                    </article>
                </AnimatedContent>

            </div>
        </main>
    )
}