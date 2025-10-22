'use client'

import AnimatedContent from "@/components/AnimatedContent"
import { CodeXml, Braces, BookOpenText, Database, FileCode, MonitorCog, Cloud } from "lucide-react"

export default function Page() {
    return (
        <div className="max-w-5xl mx-auto px-10">

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
                <div className=" my-10">
                    <div className="flex items-center gap-6">
                        <CodeXml />
                        <strong className="text-xl">Languages</strong>
                    </div>
                    <hr className="mt-6 mb-6" />
                    <div>
                        <div className="flex flex-wrap gap-3 items-center text-foreground text-lg">
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary ">C</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">C++</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">C#</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Java</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Javascript</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Python</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Typescript</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">LaTeX</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">SQL</p>
                        </div>
                    </div>
                </div>
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
                delay={0.1}
            >
                <div className=" my-10">
                    <div className="flex items-center gap-6">
                        <Braces />
                        <strong className="text-xl">Frameworks</strong>
                    </div>
                    <hr className="mt-6 mb-6" />
                    <div>
                        <div className="flex flex-wrap gap-3 items-center text-foreground text-lg">
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">React</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">NextJS</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">ExpressJS</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Django</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">SpringBoot</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">FastAPI</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Flutter</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Rest APIs</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">EJS</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">NodeJS</p>
                        </div>
                    </div>
                </div>
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
                <div className=" my-10">
                    <div className="flex items-center gap-6">
                        <BookOpenText />
                        <strong className="text-xl">Libraries</strong>
                    </div>
                    <hr className="mt-6 mb-6" />
                    <div>
                        <div className="flex flex-wrap gap-3 items-center text-foreground text-lg">
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Pytorch</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Tensorflow</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Numpy</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Pandas</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Scikit-learn</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Transformers</p>
                        </div>
                    </div>
                </div>
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
                <div className=" my-10">
                    <div className="flex items-center gap-6">
                        <Database />
                        <strong className="text-xl">Databases</strong>
                    </div>
                    <hr className="mt-6 mb-6" />
                    <div>
                        <div className="flex flex-wrap gap-3 items-center text-foreground text-lg">
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Postgres</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">MongoDB</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Oracle</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Sqlite</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">MongoDB</p>
                        </div>
                    </div>
                </div>
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
                delay={0.4}
            >
                <div className=" my-10">
                    <div className="flex items-center gap-6">
                        <Cloud />
                        <strong className="text-xl">DevOps & Cloud</strong>
                    </div>
                    <hr className="mt-6 mb-6" />
                    <div>
                        <div className="flex flex-wrap gap-3 items-center text-foreground text-lg">
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Docker</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Kubernetes</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Github actions</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Google Cloud</p>
                        </div>
                    </div>
                </div>
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
                delay={0.5}
            >
                <div className=" my-10">
                    <div className="flex items-center gap-6">
                        <FileCode />
                        <strong className="text-xl">Web Document</strong>
                    </div>
                    <hr className="mt-6 mb-6" />
                    <div>
                        <div className="flex flex-wrap gap-3 items-center text-foreground text-lg">
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">HTML</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">CSS</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Tailwind CSS</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Bootstrap</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Markdown</p>
                        </div>
                    </div>
                </div>
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
                delay={0.6}
            >
                <div className=" my-10">
                    <div className="flex items-center gap-6">
                        <MonitorCog />
                        <strong className="text-xl">Tools</strong>
                    </div>
                    <hr className="mt-6 mb-6" />
                    <div>
                        <div className="flex flex-wrap gap-3 items-center text-foreground text-lg">
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Git</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Github</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Postman</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Unity</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Linux</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Kali-linux</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">JavaFX</p>
                            <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">GDB</p>
                        </div>
                    </div>
                </div>
            </AnimatedContent>

        </div>
    )
}