import { Github, Tag, Globe, MonitorPlay } from "lucide-react"
import Link from "next/link"

export default function Page(){
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 md:px-20 px-10 gap-10 ">
                <div className="dark:border dark:border-white rounded-xl shadow-md p-4 hover:scale-102 transition-transform">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <Globe/>
                            <div className="text-2xl font-bold">
                                Notes-app
                            </div>
                        </div>
                        
                        <div className="flex gap-2">
                            <div>
                                <Link href="https://github.com/sleepytmzd/notes-app-frontend">
                                    <Github/>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://github.com/sleepytmzd/notes-app-backend">
                                    <Github/>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://notes-app-frontend-plax-9owb47yqr-sleepytmzds-projects.vercel.app">
                                    <MonitorPlay/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center mt-3">
                        <Tag/>
                        <div className="border-2 border-secondary rounded-xl p-1">NextJS</div>
                        <div className="border-2 border-secondary rounded-xl p-1">Django</div>
                        <div className="border-2 border-secondary rounded-xl p-1">Postgres</div>
                    </div>

                    <div className="mt-8">
                        Created and deployed a full-stack Note creator app. The app itself is simple, the purpose is to demonstrate the usage of 
                        tech stack. Learnt the django and nextjs frameworks, and to deploy a complete website along with backend server and online database.
                    </div>
                </div>

                
                <div className="dark:border dark:border-white rounded-xl shadow-md p-4 hover:scale-102 transition-transform">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <Globe/>
                            <div className="text-2xl font-bold">
                                HelpUrSelf
                            </div>
                        </div>
                        
                        <div className="flex gap-2">
                            <div>
                                <Link href="https://github.com/2105007NN/hackCSB-project">
                                    <Github/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center mt-3">
                        <Tag/>
                        <div className="border-2 border-secondary rounded-xl p-1">React</div>
                        <div className="border-2 border-secondary rounded-xl p-1">Express</div>
                        <div className="border-2 border-secondary rounded-xl p-1">Sqlite</div>
                        <div className="border-2 border-secondary rounded-xl p-1">Websocket</div>
                    </div>

                    <div className="mt-8">
                        Worked on a full-stack mental health companion app. Learnt react and developed both frontend and backend.
                        Used websocket to implement a real-time chat system.
                    </div>
                </div>


                <div className="dark:border dark:border-white rounded-xl shadow-md p-4 hover:scale-102 transition-transform">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <Globe/>
                            <div className="text-2xl font-bold">
                                MockGit
                            </div>
                        </div>
                        
                        <div className="flex gap-2">
                            <div>
                                <Link href="https://github.com/MehemudAzad/devSprintMain">
                                    <Github/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center mt-3">
                        <Tag/>
                        <div className="border-2 border-secondary rounded-xl p-1">React</div>
                        <div className="border-2 border-secondary rounded-xl p-1">Express</div>
                        <div className="border-2 border-secondary rounded-xl p-1">Postgres</div>
                    </div>

                    <div className="mt-8">
                        Worked on a full stack open source collaboration app. Learnt expressJS and developed the backend. 
                        <br/><span className="font-bold">Competition: </span>IEEE Devsprint 2024
                        <br/><span className="font-bold">BUET Rising Team Award</span>
                    </div>
                </div>


                <div className="dark:border dark:border-white rounded-xl shadow-md p-4 hover:scale-102 transition-transform">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <Globe/>
                            <div className="text-2xl font-bold">
                                Anibugs
                            </div>
                        </div>
                        
                        <div className="flex gap-2">
                            <div>
                                <Link href="https://github.com/arnobIsWorst/AniBugs-Revamp">
                                    <Github/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center mt-3">
                        <Tag/>
                        <div className="border-2 border-secondary rounded-xl p-1">EJS</div>
                        <div className="border-2 border-secondary rounded-xl p-1">Express</div>
                        <div className="border-2 border-secondary rounded-xl p-1">Postgres</div>
                        <div className="border-2 border-secondary rounded-xl p-1">Database Design</div>
                    </div>

                    <div className="mt-8">
                        My L-2 T-1 Database Design term project, an Anime database and marketplace. Learnt to design and manage SQL database for large projects.
                        Used EJS to develop the demo web-app displaying database management.
                    </div>
                </div>
            </div>
        </div>
    )
}