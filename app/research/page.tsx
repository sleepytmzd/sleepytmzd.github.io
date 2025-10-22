'use client'

import AnimatedContent from "@/components/AnimatedContent"
import { BookOpenCheck, Tag as TagIcon, Link2 } from "lucide-react"
import Link from "next/link"

export default function Page() {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
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
                <div className="card p-4 sm:p-6 rounded-lg my-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start md:items-center gap-4">
                            <span className="icon-wrapper"><BookOpenCheck size={20} /></span>
                            <div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                                    Too Late to Train, Too Early To Use?
                                </h3>
                                <div className="muted text-sm sm:text-base mt-1">
                                    A Study on Necessity and Viability of Low-Resource Bengali LLMs
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link href={'https://arxiv.org/abs/2407.00416'} target="_blank" rel="noopener noreferrer" aria-label="Open paper">
                                <span className="link-btn">
                                    <Link2 size={16} />
                                    <span className="sr-only">Open paper</span>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 items-center mt-4">
                        <span className="icon-wrapper"><TagIcon size={18} /></span>
                        <div className="badge">Natural Language Processing</div>
                        <div className="badge">LLMs</div>
                    </div>

                    <div className="desc mt-4 text-sm sm:text-base">
                        <strong>Abstract:</strong>{" "}
                        Each new generation of English-oriented Large Language Models (LLMs) exhibits enhanced cross-lingual transfer capabilities and significantly outperforms older LLMs on low-resource languages. This prompts the question: Is there a need for LLMs dedicated to a particular low-resource language? We aim to explore this question for Bengali, a low-to-moderate resource Indo-Aryan language native to the Bengal region of South Asia.
                        We compare the performance of open-weight and closed-source LLMs such as LLaMA-3 and GPT-4 against fine-tuned encoder-decoder models across a diverse set of Bengali downstream tasks, including translation, summarization, paraphrasing, question-answering, and natural language inference. Our findings reveal that while LLMs generally excel in reasoning tasks, their performance in tasks requiring Bengali script generation is inconsistent. Key challenges include inefficient tokenization of Bengali script by existing LLMs, leading to increased computational costs and potential performance degradation. Additionally, we highlight biases in machine-translated datasets commonly used for Bengali NLP tasks. We conclude that there is a significant need for a Bengali-oriented LLM, but the field currently lacks the high-quality pretraining and instruction-tuning datasets necessary to develop a highly effective model.
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
                <div className="card p-4 sm:p-6 rounded-lg my-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start md:items-center gap-4">
                            <span className="icon-wrapper"><BookOpenCheck size={20} /></span>
                            <div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                                    Efficient Real-Time Video Colorization on Low-End CPUs via Pruning and Quantization
                                </h3>
                                <div className="muted text-sm sm:text-base mt-1">
                                    Conference paper — real-time colorization on CPUs
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link href={'https://dl.acm.org/doi/10.1145/3704522.3704536'} target="_blank" rel="noopener noreferrer" aria-label="Open paper">
                                <span className="link-btn">
                                    <Link2 size={16} />
                                    <span className="sr-only">Open paper</span>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 items-center mt-4">
                        <span className="icon-wrapper"><TagIcon size={14} /></span>
                        <div className="badge">Computer Vision</div>
                        <div className="badge">Deep Learning</div>
                        <div className="badge">Neural Networks</div>
                    </div>

                    <div className="desc mt-4 text-sm sm:text-base">
                        <strong>Abstract:</strong>{" "}
                        Grayscale video capture remains a popular, low-cost approach for security and surveillance-related tasks, especially on edge devices. We create a deep-learning solution to colorize grayscale videos in real-time without dedicated acceleration hardware such as GPUs. We first trained EfficientNet-B7-based U-Net on a combination of image and video datasets. We prune redundant parameters in the bottleneck layers of the trained neural network using weight-base pruning, followed by minimal training to recover performance. Finally, we quantize parts of the neural network which reduces model size and inference-time memory requirement. Our final optimized model achieves a 43.75% inference speed improvement and 30.6% model size reduction over the base model and can colorize videos at 6+ frames per second on low-end CPUs while maintaining a competitive CDC score of 0.0031 and PSNR of 19.
                    </div>
                </div>
            </AnimatedContent>

        </div>
    )
}