"use client"
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Size2() {
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
                            <CardTitle className='text-center'>Service No.1(PKT-4)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>OSPF</div>
                            <div>HSRP</div>
                            <div>DHCP</div>
                            <div>ACL</div>
                            <div>----------------------------------------</div>
                            <div>VLAN</div>
                            <div>WIRELESS</div>
                            <Link href={"/pkt/3"}>
                                <Button className='w-full mt-2'>Choose</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div variants={rightCardVariants} className="w-full md:w-72">
                    <Card>
                        <CardHeader >
                            <CardTitle className='text-center'>Service No.2(PKT-5)</CardTitle>

                        </CardHeader>
                        <CardContent>
                            <div>OSPF</div>
                            <div>HSRP</div>
                            <div>DHCP</div>
                            <div>ACL</div>
                            <div>----------------------------------------</div>
                            <div>SPANNING TREE</div>
                            <div>VLAN</div>
                            <div>WIRELESS</div>
                            <div>IP PHONE</div>
                            <Link href={"/pkt/4"}>
                                <Button className='w-full mt-2'>Choose</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </>
    )
}