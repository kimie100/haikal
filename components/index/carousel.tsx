"use client";

import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";

export const IndexCarousel = () => {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    const items = [
        {
            title: "Packet Fail",
            sub: "PKT-1",
            img: "/Net_1.png",
            desc: "The network topology is robust, incorporating three routers for efficient communication, redundancy, and secure data handling. It uses OSPF, DHCP, Access Control Lists, VLAN segmentation, and access points for enhanced security. The topology ensures seamless transitions in case of router failure, optimizes path selection, and simplifies device connectivity. It provides a scalable, efficient, and fault-tolerant network environment."

        },
        {
            title: "Packet Fail",
            sub: "PKT-2",
            img: "/slider-img.png",
            desc: "The network topology is robust, incorporating three routers for efficient communication, redundancy, and secure data handling. It uses OSPF, DHCP, Access Control Lists, VLAN segmentation, and access points for enhanced security. The topology ensures seamless transitions in case of router failure, optimizes path selection, and simplifies device connectivity. It provides a scalable, efficient, and fault-tolerant network environment."
        },
        {
            title: " Packet Fail",
            sub: "PKT-4",
            img: "/slider-img.png",
            desc: "The network topology is optimized for high performance and resilience, featuring three interconnected routers for smooth data flow, redundancy, and secure communication. It uses OSPF, DHCP, and Access Control Lists for robust security. VLAN segmentation manages traffic efficiently, and built-in fault tolerance ensures uninterrupted service. This scalable architecture promotes efficient device connectivity and future-ready management."
        },
        {
            title: "Packet Fail",
            sub: "PKT-5",
            img: "/slider-img.png",
            desc: "The network topology is resilient, featuring three interconnected routers for efficient data flow, redundancy, and secure management. It uses OSPF for dynamic path optimization, DHCP for IP address allocation, and Access Control Lists for access security. VLAN segmentation enhances traffic management, and built-in fault tolerance ensures seamless operation. This adaptable setup supports efficient device connectivity and a future-proof network infrastructure."
        },
    ]
    return (
        <>
            <div className="w-full flex justify-center px-4 md:px-6 lg:px-8">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-5xl"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {items.map((item, index) => (
                            <>
                                <CarouselItem key={index}>
                                    <div className="p-1  ">
                                        <Card className="w-full h-96 bg-[#00204a]"  >
                                            <CardHeader>
                                                <CardTitle className="text-xl md:text-2xl text-white">
                                                    {item.title}  <br />
                                                    {item.sub}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="">
                                                <div className="flex flex-row w-full">
                                                    <span className=" font-semibold text-wrap text-white w-[70%]">
                                                        {item.desc}
                                                    </span>
                                                    <div className="w-[30%]">
                                                        <Image src={item.img} alt="" width={300} height={300} />
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            </>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    )
}