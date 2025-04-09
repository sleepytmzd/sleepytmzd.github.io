import { BookOpenCheck, Tag, Link2 } from "lucide-react"
import Link from "next/link"

export default function Page(){
    return (
        <div className="max-w-5xl mx-auto px-10">
            <div className="shadow-lg border border-white p-6 rounded-lg my-10">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <BookOpenCheck/>
                        <div className="font-bold text-xl">
                        Too Late to Train, Too Early To Use?
                        <br/>A Study on Necessity and Viability of Low-Resource Bengali LLMs
                        </div>
                    </div>
                    <div>
                        <Link href={'https://arxiv.org/abs/2407.00416'}>
                            <Link2/>
                        </Link>
                    </div>
                </div>
                <div className="flex gap-4 items-center my-5">
                    <Tag/>
                    <div className="border-2 border-secondary rounded-xl p-1">Natural Language Processing</div>
                    <div className="border-2 border-secondary rounded-xl p-1">LLMs</div>
                </div>
                <div className="my-5">
                    <span className="font-bold">Abstract: </span>
                    Each new generation of English-oriented Large Language Models (LLMs) exhibits enhanced cross-lingual transfer capabilities and significantly outperforms older LLMs on low-resource languages. This prompts the question: Is there a need for LLMs dedicated to a particular low-resource language? We aim to explore this question for Bengali, a low-to-moderate resource Indo-Aryan language native to the Bengal region of South Asia.
                    We compare the performance of open-weight and closed-source LLMs such as LLaMA-3 and GPT-4 against fine-tuned encoder-decoder models across a diverse set of Bengali downstream tasks, including translation, summarization, paraphrasing, question-answering, and natural language inference. Our findings reveal that while LLMs generally excel in reasoning tasks, their performance in tasks requiring Bengali script generation is inconsistent. Key challenges include inefficient tokenization of Bengali script by existing LLMs, leading to increased computational costs and potential performance degradation. Additionally, we highlight biases in machine-translated datasets commonly used for Bengali NLP tasks. We conclude that there is a significant need for a Bengali-oriented LLM, but the field currently lacks the high-quality pretraining and instruction-tuning datasets necessary to develop a highly effective model.
                </div>
            </div>


            <div className="shadow-lg border border-white p-6 rounded-lg my-10">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <BookOpenCheck/>
                        <div className="font-bold text-xl">
                        Efficient Real-Time Video Colorization on Low-End CPUs via
                        <br/>Pruning and Quantization
                        </div>
                    </div>
                    <div>
                        <Link href={'https://dl.acm.org/doi/10.1145/3704522.3704536'}>
                            <Link2/>
                        </Link>
                    </div>
                </div>
                <div className="flex gap-4 items-center my-5">
                    <Tag/>
                    <div className="border-2 border-secondary rounded-xl p-1">Computer Vision</div>
                    <div className="border-2 border-secondary rounded-xl p-1">Deep Learning</div>
                    <div className="border-2 border-secondary rounded-xl p-1">Neural Networks</div>
                </div>
                <div className="my-5">
                    <span className="font-bold">Abstract: </span>
                    Grayscale video capture remains a popular, low-cost approach for security and surveillance-related tasks, especially on edge devices. We create a deep-learning solution to colorize grayscale videos in real-time without dedicated acceleration hardware such as GPUs. We first trained EfficientNet-B7-based U-Net on a combination of image and video datasets. We prune redundant parameters in the bottleneck layers of the trained neural network using weight-base pruning, followed by minimal training to recover performance. Finally, we quantize parts of the neural network which reduces model size and inference-time memory requirement. Our final optimized model achieves a 43.75% inference speed improvement and 30.6% model size reduction over the base model and can colorize videos at 6+ frames per second on low-end CPUs while maintaining a competitive CDC score of 0.0031 and PSNR of 19.
                </div>
            </div>
        </div>
    )
}