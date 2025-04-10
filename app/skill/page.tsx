import { CodeXml, Braces, BookOpenText, Database, FileCode, MonitorCog } from "lucide-react"

export default function Page() {
    return (
        <div className="max-w-5xl mx-auto px-10">
            <div className=" my-10">
                <div className="flex items-center gap-6">
                    <CodeXml/>
                    <strong className="text-xl">Languages</strong>
                </div>
                <hr className="mt-6 mb-6" />
                <div>
                    <div className="flex flex-wrap gap-3 items-center text-secondary text-lg">
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">C</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">C++</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Java</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Javascript</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Python</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Typescript</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">LaTeX</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">SQL</p>
                    </div>
                </div>
            </div>


            <div className=" my-10">
                <div className="flex items-center gap-6">
                    <Braces/>
                    <strong className="text-xl">Frameworks</strong>
                </div>
                <hr className="mt-6 mb-6" />
                <div>
                    <div className="flex flex-wrap gap-3 items-center text-secondary text-lg">
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">React</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">NextJS</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">ExpressJS</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Django</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Rest APIs</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">EJS</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">NodeJS</p>
                    </div>
                </div>
            </div>


            <div className=" my-10">
                <div className="flex items-center gap-6">
                    <BookOpenText/>
                    <strong className="text-xl">Libraries</strong>
                </div>
                <hr className="mt-6 mb-6" />
                <div>
                    <div className="flex flex-wrap gap-3 items-center text-secondary text-lg">
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Pytorch</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Numpy</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Pandas</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Scikit-learn</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Transformers</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">NodeJS</p>
                    </div>
                </div>
            </div>


            <div className=" my-10">
                <div className="flex items-center gap-6">
                    <Database/>
                    <strong className="text-xl">Databases</strong>
                </div>
                <hr className="mt-6 mb-6" />
                <div>
                    <div className="flex flex-wrap gap-3 items-center text-secondary text-lg">
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Postgres</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Oracle</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Sqlite</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">MongoDB</p>
                    </div>
                </div>
            </div>


            <div className=" my-10">
                <div className="flex items-center gap-6">
                    <FileCode/>
                    <strong className="text-xl">Web Document</strong>
                </div>
                <hr className="mt-6 mb-6" />
                <div>
                    <div className="flex flex-wrap gap-3 items-center text-secondary text-lg">
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">HTML</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">CSS</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Tailwind CSS</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Bootstrap</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Markdown</p>
                    </div>
                </div>
            </div>


            <div className=" my-10">
                <div className="flex items-center gap-6">
                    <MonitorCog/>
                    <strong className="text-xl">Tools</strong>
                </div>
                <hr className="mt-6 mb-6" />
                <div>
                    <div className="flex flex-wrap gap-3 items-center text-secondary text-lg">
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Git</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Github</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">Postman</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">JavaFX</p>
                        <p className="border border-secondary rounded-lg px-4 py-2 hover:bg-primary">GDB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}