import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import Link from "next/link"

interface ServiceIndexProp {
    btnName: string
    goTo: string
}

export const ServiceIndex = ({ btnName, goTo }: ServiceIndexProp) => {

    const items = [
        {
            image: "/s1.png",
            title: "OSPF",
            content: "OSPF, or Open Shortest Path First, is a link-state routing protocol used to find the best path for data through a network. It&apos;s designed for IP networks and is commonly used in large enterprise networks"
        },
        {
            image: "/s2.png",
            title: "HSRP",
            content: "HSRP is a network protocol that ensures high availability of IP networks by allowing multiple routers to work together,preventing network outages in case of failure."
        },
        {
            image: "/s3.png",
            title: "DHCP",
            content: "DHCP is a network management protocol that automatically assigns IP addresses and other network configuration settings to devices, simplifying the process and enabling seamless network connectivity."
        }
    ]


    return (
        <>
            <section className="min-w-fit mt-10  ">
                <div className="flex justify-center items-center">
                    <div className="container mb-10 ">
                        <div className="flex flex-col m-4 justify-center items-center ">
                            <h2 className="text-5xl font-bold">
                                Our <span>Services</span>
                            </h2>
                            <p>
                                There are many types of services that we will apply in our packet tracer file and each file has different characteristics.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row space-x-4 justify-center items-center">
                            {items.map((item, index) => (
                                <>
                                    <Card className=" md:w-[350px] md:h-[300px]" key={index} >
                                        <CardHeader className="flex justify-center items-center">
                                            <Image src={item.image} alt="" width={50} height={50} />
                                            <CardTitle className="font-bold">{item.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-wrap">
                                                {item.content}
                                            </p>
                                        </CardContent>

                                    </Card>
                                </>
                            ))}

                        </div>
                        <div className="row">

                        </div>
                        <div className="flex justify-center items-center mt-4">
                            <Link href={goTo}>
                                <Button>
                                    {btnName}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}