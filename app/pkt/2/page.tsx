"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { motion } from "framer-motion"
import { ArrowDownCircle } from "lucide-react"
export default function Pkt2() {
    const items = [
        {
            title: "OSPF",
            detail: "OSPF, or Open Shortest Path First, is a link-state routing protocol used to find the best path for data through a network. It’s designed for IP networks and is commonly used in large enterprise networks due to its scalability and efficiency."
        },
        {
            title: "HSRP",
            detail: "OSPF, or Open Shortest Path First, is a link-state routing protocol used to find the best path for data through a network. It’s designed for IP networks and is commonly used in large enterprise networks due to its scalability and efficiency."
        },
        {
            title: "DHCP",
            detail: "Hot Standby Router Protocol (HSRP) is a network protocol used to ensure high availability for IP networks. Developed by Cisco, HSRP allows multiple routers to work together to present the appearance of a single virtual router to the clients on a network (LAN). This redundancy helps prevent network outages in case one of the routers fails."
        },
        {
            title: "SPT",
            detail: "Spanning Tree Protocol (STP) is a network protocol that prevents loops in Ethernet networks by creating a loop-free logical topology. It is particularly important in environments with redundant network paths, where loops can cause broadcast storms and other network issues."
        },
        {
            title: "VLAN",
            detail: "An Access Control List (ACL) is a set of rules used to control network traffic and determine which packets are allowed or denied access to network resources. ACLs can be applied to routers and switches to filter traffic based on various criteria, such as IP addresses, protocols, or ports."
        },
        {
            title: "Wireless",
            detail: "A wireless service refers to the provision of network connectivity through radio waves instead of physical cables. It enables devices like smartphones, laptops, tablets, and other wireless-enabled devices to connect to a network (such as the internet or a private LAN) without needing a wired connection. This is commonly implemented using Wi-Fi technology."
        },
        {
            title: "ACL",
            detail: "An Access Control List (ACL) is a set of rules used to control network traffic and determine which packets are allowed or denied access to network resources. ACLs can be applied to routers and switches to filter traffic based on various criteria such as IP addresses, protocols, or port numbers."
        },
        {
            title: "IP PHONE",
            detail: "IP phones are used for voice communication over the internet or other IP networks, leveraging Voice over IP (VoIP) technology. VoIP enables voice communication to be transmitted over the internet rather than other IP networks."
        },
    ]
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 100
            }
        }
    }

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }
        }
    }

    const downloadVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                yoyo: Infinity
            }
        }
    }
    return (
        <>
            <div className="flex justify-center items-center min-h-screen flex-col p-8">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={headerVariants}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl font-bold mb-4">
                        BASIC SECURITY MODULE FOR NETWORK INSTALLATION
                    </h1>
                    <h2 className="text-xl mb-4 text-white">Download your topology for PKT-1</h2>

                    <motion.a
                        href="https://drive.google.com/drive/folders/1I_cFcVakMwk8pDr7YR9A9wUqBZJ0cd21"
                        className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
                        variants={downloadVariants}
                        initial="initial"
                        whileHover="hover"
                    >
                        Download Here!!! <ArrowDownCircle className="w-5 h-5" />
                    </motion.a>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl"
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className="h-full"
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-blue-600">
                                        {item.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.detail}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </>
    )
}