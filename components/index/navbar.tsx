import Link from "next/link"


export const NavBar = () => {
    return (
        <>
            <nav className="flex justify-between items-center p-4 md:p-6">
                <Link href="/" className="text-white text-xl font-bold">
                    NetworkEssential
                </Link>
                <div className="flex items-center gap-6">
                    <Link href="/" className="text-cyan-400 hover:text-cyan-300 ">HOME</Link>
                    <Link href="/about" className="text-white hover:text-cyan-300">ABOUT</Link>
                    <Link href="/services" className="text-white hover:text-cyan-300">SERVICES</Link>
                    <Link href="/team" className="text-white hover:text-cyan-300">TEAM</Link>
                    {/* <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
                        LOGIN
                    </Button> */}
                </div>
            </nav>
        </>
    )
}