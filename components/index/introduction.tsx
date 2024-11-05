import Image from "next/image"

export const Introduction = () => {
    return (
        <>
            <section >
                <div >
                    <div className="flex justify-center items-center text-6xl text-white ">
                        <h2>
                            Intro<span>duction</span>
                        </h2>
                    </div>
                    <div className="flex flex-row items-center justify-center ">
                        <div className="">
                            <div className="img-box">
                                <Image src="/about-img.png" width={500} height={500} alt="" />
                            </div>
                        </div>
                        <div className="w-[50vh]">
                            <div className="text-white">
                                <h3 className="text-3xl">
                                    We Are NetEssential
                                </h3>
                                <p className="text-wrap">
                                    A medium-sized network topology is a complex task that requires understanding
                                    networking principles, careful planning, and execution. It involves designing
                                    a network that is efficient, scalable, secure, and resilient, capable of meeting
                                    organizational demands and accommodating future growth.
                                </p>
                                <p className="text-wrap">
                                    The module serves as a reference for the general public and professionals,
                                    offering step-by-step guidance on the planning and implementation process.
                                    It provides templates,and checklists. This module equips users with the knowledge
                                    and confidence to design and implement secure, organized, and efficient networks.
                                </p>
                                <a href="about.html">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}