import Image from "next/image"

import { motion } from "framer-motion"
import { Card, CardHeader, CardContent, } from "../ui/card"

import { Footer } from "../footer"
export const TeamMember = () => {
    const members = [
        {
            img: "/team-1.jpg",
            name: "Abdul Rohim Fitri",
            role: "Team Leader"
        },
        {
            img: "/team-2.jpg",
            name: "Pn. Afsal",
            role: "Supervisor"
        },
        {
            img: "/team-3.jpg",
            name: "Muhammad Haikal",
            role: "Team Member 1"
        }
    ]
    return (
        <>
            <div className="flex flex-col justify-between  min-h-screen">
                <section className="min-w-fit flex-none mt-auto">
                    <div className="flex flex-col justify-center items-center">
                        <div className="m-4">
                            <h2 className="text-6xl text-white">
                                Our <span> Team</span>
                            </h2>
                        </div>

                        <div className="">
                            <div className="flex flex-row space-x-4">
                                {members.map((member, index) => (
                                    <>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            key={index}
                                        >
                                            <Card className="w-[350px] h-[160px]" key={index} >
                                                <CardHeader className="justify-center  items-center">
                                                    <Image src={member.img} alt="" width={50} height={50} />
                                                </CardHeader>
                                                <CardContent className="justify-center items-center mb-2">
                                                    <h5 className="text-2xl  text-center">
                                                        {member.name}
                                                    </h5>
                                                    <p className="text-center">
                                                        {member.role}
                                                    </p>
                                                </CardContent>

                                            </Card>

                                        </motion.div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <Footer bg="bg-white" txt="text-black" />
            </div>
        </>
    )
}