import { Linkedin, Github, Facebook, GraduationCap } from "lucide-react"
import Link from "next/link"

export function Footer(){
    return(
        <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center items-center gap-8">
                <Link href={'www.linkedin.com/in/tamzeed-mahfuz-795518348'}>
                    <Linkedin />
                </Link>
                <Link href={'https://github.com/sleepytmzd'}>
                    <Github />
                </Link>
                <Link href={'https://www.facebook.com/tamzeed.mahfuz'}>
                    <Facebook />
                </Link>
                <Link href={'https://scholar.google.com/citations?user=IzxVs_wAAAAJ&hl=en'}>
                    <GraduationCap />
                </Link>
            </div>
            <div>tamzeedmahfuz2003@gmail.com</div>
        </div>
        
    )
}