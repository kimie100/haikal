import Image from "next/image"





export const Objective = () => {
    const items = [
        {
            img: "/w1.png",
            detail: "To design topology based on medium size network using Packet Tracers"
        },
        {
            img: "/w2.png",
            detail: "To implement  security  on telnet and SSH for remote access services using ACLs"
        },
        {
            img: "/w3.png",
            detail: "To implement  security  on telnet and SSH for remote access services using ACLs"
        },
        {
            img: "/w4.png",
            detail: "To operate selected packages services on access layer for medium size network topology"
        }
    ]

    return (
        <>
            <section className="min-w-fit mt-10 ">
                <div className="flex flex-col justify-center items-center">
                    <div className="heading_container heading_center">
                        <h2 className="text-6xl font-bold">
                            Our <span>Objective</span>
                        </h2>
                    </div>
                    <div className="why_container">
                        {items.map((item, index) => (
                            <>
                                <div className="box" key={index}>
                                    <div className="flex m-2 justify-center items-center">
                                        <Image src={item.img} alt="" width={100} height={100} />
                                    </div>
                                    <div className="text-center text-black font-bold">
                                        <h5>
                                            {item.detail}
                                        </h5>
                                    </div>
                                </div>
                            </>
                        ))}

                    </div>
                    {/* <div className="btn-box">
                        <a href="about.html">
                            Read More
                        </a>
                    </div> */}
                </div>
            </section>


        </>
    )
}