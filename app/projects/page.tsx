'use client'

import AnimatedContent from "@/components/AnimatedContent"
import { Github, Tag, Globe, MonitorPlay } from "lucide-react"
import Link from "next/link"

export default function Page() {
    return (
        <div className="max-w-6xl mx-auto py-10">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-6 px-6">
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
                    <div className="card">
                        <div className="title-row">
                            <div className="flex gap-3 items-center">
                                <span className="icon-wrapper"><Globe size={18} /></span>
                                <div>
                                    <div className="text-2xl font-bold">Foodhub</div>
                                    <div className="muted">Full-stack microservices platform</div>
                                </div>
                            </div>

                            <div className="link-btns">
                                <Link href="https://github.com/sleepytmzd/foodhub-therap-javafest" className="link-btn" aria-label="Foodhub repository">
                                    <Github size={16} /> Repo
                                </Link>
                                <Link href="https://youtu.be/NxZBAfyFvio" className="link-btn" aria-label="Foodhub demo">
                                    <MonitorPlay size={16} /> Demo
                                </Link>
                            </div>
                        </div>

                        <div className="badges mt-3">
                            <Tag />
                            <div className="badge">NextJS</div>
                            <div className="badge">SpringBoot</div>
                            <div className="badge">FastAPI</div>
                            <div className="badge">Postgres</div>
                            <div className="badge">MongoDB</div>
                            <div className="badge">DevOps</div>
                            <div className="badge">Keycloak</div>
                            <div className="badge">Kubernetes</div>
                        </div>

                        <div className="desc mt-4">
                            Created and deployed a full-stack web platform for food lovers following a microservices architecture. Services are containerized with Docker and deployed to Google Kubernetes Engine. Implemented CI/CD with GitHub Actions and adopted DevOps best practices to ensure scalability and reliability.
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
                    <div className="card">
                        <div className="title-row">
                            <div className="flex gap-3 items-center">
                                <span className="icon-wrapper"><Globe size={18} /></span>
                                <div>
                                    <div className="text-2xl font-bold">Notes-app</div>
                                    <div className="muted">Note creator with frontend & backend</div>
                                </div>
                            </div>

                            <div className="link-btns">
                                <Link href="https://github.com/sleepytmzd/notes-app-frontend" className="link-btn" aria-label="Notes frontend">
                                    <Github size={16} /> Frontend
                                </Link>
                                <Link href="https://github.com/sleepytmzd/notes-app-backend" className="link-btn" aria-label="Notes backend">
                                    <Github size={16} /> Backend
                                </Link>
                                <Link href="https://notes-app-frontend-plax-9owb47yqr-sleepytmzds-projects.vercel.app" className="link-btn" aria-label="Notes live demo">
                                    <MonitorPlay size={16} /> Live
                                </Link>
                            </div>
                        </div>

                        <div className="badges mt-3">
                            <Tag />
                            <div className="badge">NextJS</div>
                            <div className="badge">Django</div>
                            <div className="badge">Postgres</div>
                        </div>

                        <div className="desc mt-4">
                            A full-stack note creator app built to demonstrate end-to-end deployment. Implemented frontend in Next.js, backend in Django.
                            Deployed on Vercel and Render. Supabase for authentication and database.
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
                    <div className="card">
                        <div className="title-row">
                            <div className="flex gap-3 items-center">
                                <span className="icon-wrapper"><Globe size={18} /></span>
                                <div>
                                    <div className="text-2xl font-bold">Chain Reaction</div>
                                    <div className="muted">2 player game with AI agent</div>
                                </div>
                            </div>

                            <div className="link-btns">
                                <Link href="https://github.com/sleepytmzd/Chain-reaction-backend" className="link-btn" aria-label="Chain Reaction repo">
                                    <Github size={16} /> Repo
                                </Link>
                            </div>
                        </div>

                        <div className="badges mt-3">
                            <Tag />
                            <div className="badge">Unity</div>
                            <div className="badge">Spring Boot</div>
                            <div className="badge">Adversarial AI</div>
                        </div>

                        <div className="desc mt-4">
                            Developed a 2-player Chain Reaction game with an AI opponent using Minimax algorithm with Alpha-Beta pruning. Created the game in Unity and built a Spring Boot backend to manage game state and player interactions.
                            Deployed on UnityHub and Render.
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
                    <div className="card">
                        <div className="title-row">
                            <div className="flex gap-3 items-center">
                                <span className="icon-wrapper"><Globe size={18} /></span>
                                <div>
                                    <div className="text-2xl font-bold">HelpUrSelf</div>
                                    <div className="muted">Mental health companion with real-time chat</div>
                                </div>
                            </div>

                            <div className="link-btns">
                                <Link href="https://github.com/2105007NN/hackCSB-project" className="link-btn" aria-label="HelpUrSelf repo">
                                    <Github size={16} /> Repo
                                </Link>
                            </div>
                        </div>

                        <div className="badges mt-3">
                            <Tag />
                            <div className="badge">React</div>
                            <div className="badge">Express</div>
                            <div className="badge">Sqlite</div>
                            <div className="badge">Websocket</div>
                        </div>

                        <div className="desc mt-4">
                            Built a companion app focusing on mental health. Implemented a websocket-powered real-time chat. Developed frontend using React and backend with Express.
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
                    <div className="card">
                        <div className="title-row">
                            <div className="flex gap-3 items-center">
                                <span className="icon-wrapper"><Globe size={18} /></span>
                                <div>
                                    <div className="text-2xl font-bold">MockGit</div>
                                    <div className="muted">Open-source collaboration app</div>
                                </div>
                            </div>

                            <div className="link-btns">
                                <Link href="https://github.com/MehemudAzad/devSprintMain" className="link-btn" aria-label="MockGit repo">
                                    <Github size={16} /> Repo
                                </Link>
                            </div>
                        </div>

                        <div className="badges mt-3">
                            <Tag />
                            <div className="badge">React</div>
                            <div className="badge">Express</div>
                            <div className="badge">Postgres</div>
                        </div>

                        <div className="desc mt-4">
                            Contributed to a collaboration platform. Implemented backend features with Express.js. Competition: IEEE Devsprint 2024 — BUET Rising Team Award.
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
                    delay={0.7}
                >

                    <div className="card">
                        <div className="title-row">
                            <div className="flex gap-3 items-center">
                                <span className="icon-wrapper"><Globe size={18} /></span>
                                <div>
                                    <div className="text-2xl font-bold">Anibugs</div>
                                    <div className="muted">Anime DB & marketplace (DB design)</div>
                                </div>
                            </div>

                            <div className="link-btns">
                                <Link href="https://github.com/arnobIsWorst/AniBugs-Revamp" className="link-btn" aria-label="Anibugs repo">
                                    <Github size={16} /> Repo
                                </Link>
                            </div>
                        </div>

                        <div className="badges mt-3">
                            <Tag />
                            <div className="badge">EJS</div>
                            <div className="badge">Express</div>
                            <div className="badge">Postgres</div>
                            <div className="badge">Database Design</div>
                        </div>

                        <div className="desc mt-4">
                            Term project focused on SQL database design and a demo EJS app for managing and showcasing an anime database and marketplace.
                        </div>
                    </div>
                </AnimatedContent>

            </div>
        </div>
    )
}