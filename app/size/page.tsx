"use client"
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Size() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const leftCardVariants = {
        hidden: {
            x: -100,
            opacity: 0,
            scale: 0.8
        },
        show: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.8
            }
        }
    };

    const rightCardVariants = {
        hidden: {
            x: 100,
            opacity: 0,
            scale: 0.8
        },
        show: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.8
            }
        }
    };
    return (
        <>

            <motion.div
                className="flex flex-col md:flex-row gap-6 items-center justify-center p-8"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <motion.div variants={leftCardVariants} className="w-full md:w-72">
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-center'>Size No. 1</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <strong> {">= 200 or <= 300"}</strong><br />
                            <p>Clients</p>
                            <p>Please choose your size of clients based on your requirements</p>
                            <Link href={"/size/1"}>
                                <Button className='w-full mt-2'>Start now</Button></Link>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div variants={rightCardVariants} className="w-full md:w-72">
                    <Card>
                        <CardHeader >
                            <CardTitle className='text-center'>Size No. 2</CardTitle>

                        </CardHeader>
                        <CardContent>
                            <strong> {">= 400 or <= 500"}</strong><br />
                            <p>Clients</p>
                            <p>Please choose your size of clients based on your requirements</p>
                            <Link href={"/size/2"}>
                                <Button className='w-full mt-2'>Start now</Button></Link>
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </>
    )
}