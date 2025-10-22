'use client';

import { DownloadCVButton } from "@/components/DownloadCVButton";
import AnimatedContent from "@/components/AnimatedContent";
import LightRays from "@/components/LightRays";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 -z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#bdbfbfff"
          raysSpeed={1.5}
          lightSpread={0.5}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full"
        />
        {/* Subtle overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--background)]/30 via-transparent to-[color:var(--background)]/55" />
      </div>

      {/* Content on top */}
      <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-20 min-h-[540px]">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:gap-20 gap-10">
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
            <div>
              <div className="text-2xl font-bold">Hey There!</div>
              <div className="mt-6 text-lg">
                I'm{" "}
                <strong className="text-4xl text-secondary">
                  Tamzeed Mahfuz
                </strong>
                , currently an undergrad in
                <br />Bangladesh University of Engineering and Technology (BUET).
                <br />
                <br />

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
                  <div>
                    I'm a{" "}
                    <span className="font-bold">full stack developer</span>, with a
                    passion for{" "}
                    <span className="font-bold">system architecture</span>
                    <br /> and building impactful software solutions.
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
                  delay={0.8}
                >
                  <div>
                    <br />My interests lie at the intersection of{" "}
                    <span className="font-bold">Machine Learning</span> and{" "}
                    <span className="font-bold">Artificial Intelligence</span>,
                    <br /> and I have hands-on{" "}
                    <span className="font-bold">research experience</span> in these
                    areas.
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
                  delay={1.2}
                >
                  <div>
                    <br /> Lately, I've also been diving into the worlds of{" "}
                    <span className="font-medium">cybersecurity</span> and{" "}
                    <span className="font-medium">quantum computing</span>
                    <br /> — exploring how emerging technologies shape our future.
                  </div>
                </AnimatedContent>
              </div>
              <div className="mt-6">
                <DownloadCVButton />
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
            <div className="rounded-3xl p-1 bg-gradient-to-tr from-[color:var(--primary)] to-transparent">
              <img
                src="/tmzd.jpg"
                alt="Tamzeed Mahfuz"
                className="md:w-120 w-80 rounded-3xl shadow-xl border border-[color-mix(in_srgb,var(--foreground)_8%)] dark:border-[rgba(255,255,255,0.08)]"
              />
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}

// min-w-70 max-w-full scale-70
// return (
//   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//     <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//       <Image
//         className="dark:invert"
//         src="/next.svg"
//         alt="Next.js logo"
//         width={180}
//         height={38}
//         priority
//       />
//       <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//         <li className="mb-2 tracking-[-.01em]">
//           Get started by editing{" "}
//           <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//             app/page.tsx
//           </code>
//           .
//         </li>
//         <li className="tracking-[-.01em]">
//           Save and see your changes instantly.
//         </li>
//       </ol>

//       <div className="flex gap-4 items-center flex-col sm:flex-row">
//         <a
//           className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             className="dark:invert"
//             src="/vercel.svg"
//             alt="Vercel logomark"
//             width={20}
//             height={20}
//           />
//           Deploy now
//         </a>
//         <a
//           className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >