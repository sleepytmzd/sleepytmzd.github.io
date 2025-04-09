import { GraduationCap } from "lucide-react"

export default function Page() {
    return (
        <div className="max-w-5xl mx-auto px-10">
            <div className="shadow-lg border border-white rounded-lg p-6 my-5">
                <div className="flex justify-between items-center my-5">
                    <div className="flex items-center gap-6">
                        <GraduationCap/>
                        <div className="font-bold text-lg">
                            Bangladesh University of Engineering and Technology (BUET)
                        </div>
                    </div>
                    <div>2022 - Present</div>
                </div>
                <div className="my-5">
                    B.Sc in Computer Science and Engineering
                </div>
            </div>


            <div className="shadow-lg border border-white rounded-lg p-6 my-5">
                <div className="flex justify-between items-center my-5">
                    <div className="flex items-center gap-6">
                        <GraduationCap/>
                        <div className="font-bold text-lg">
                            Notre Dame College, Dhaka
                        </div>
                    </div>
                    <div>2019 - 2021</div>
                </div>
                <div className="my-5">
                    Higher Secondary Certificate (HSC)
                </div>
            </div>


            <div className="shadow-lg border border-white rounded-lg p-6 my-5">
                <div className="flex justify-between items-center my-5">
                    <div className="flex items-center gap-6">
                        <GraduationCap/>
                        <div className="font-bold text-lg">
                            Rajuk Uttara Model College
                        </div>
                    </div>
                    <div>2014 - 2019</div>
                </div>
                <div className="my-5">
                    Secondary School Certificate (SSC)
                </div>
            </div>
        </div>
    )
}