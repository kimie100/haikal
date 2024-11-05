"use client"
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Detail() {
    return (
        <>

            <div className="flex flex-col justify-center items-center h-screen text-white">
                <div className="header">BASIC SECURITY MODULE FOR NETWORK INSTALLATION</div>

                <div className="content mt-5">
                    <h2>Before We Start,<br />Let’s read the step-by-step guideline to create your topology :</h2>

                    <div className="container">
                        <div className="flex flex-col space-y-6">
                            <motion.div
                                whileHover={{ scale: 1.1 }}>
                                <Card>
                                    <CardContent className='items-center justify-center '>
                                        <p className='text-center'>Choose your size network</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}>
                                <Card>
                                    <CardContent className='items-center justify-center '>
                                        <p className='text-center'>Choose your services</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}>
                                <Card>
                                    <CardContent className='items-center justify-center '>
                                        <p className='text-center'>Download your network topology</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                        <div className="container mt-4 justify-center items-center flex">
                            <Link href={"/size"}>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}

                                >
                                    Start
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}