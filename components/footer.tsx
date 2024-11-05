import { Button } from "./ui/button"
import { Input } from "./ui/input"

interface FooterProp {
    bg: string
    txt: string
}

export const Footer = ({ bg, txt }: FooterProp) => {
    return (
        <>
            <section className={`${bg} w-screen  flex-none mt-auto h-[10rem]`}>
                <div className="pl-[22.5rem]">
                    <div className="flex flex-row space-x-4">
                        <div className="col-md-6 col-lg-3 info_col">
                            <div className="info_contact">
                                <h4 className={`font-bold ${txt}`}>
                                    Address
                                </h4>
                                <div className="flex flex-col">
                                    <a href="">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <span className={`${txt}`}>
                                            57, Jalan Sultan Ismail, <br />20200 Kuala Terengganu,<br /> Terengganu
                                        </span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <span className={`${txt}`}>
                                            Call +60 10 949 2091
                                        </span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <span className={`${txt}`}>
                                            NetEssential1218@gmail.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 info_col">
                            <div className="info_detail">
                                <h4 className={`${txt} font-bold`}>
                                    Info
                                </h4>
                                <p className={`${txt}`}>
                                    If you need more help, <br /> please contact us.
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-24">
                                <h4 className={`${txt} font-bold`}>
                                    Links
                                </h4>
                                <div className="flex flex-col">
                                    <a className={`${txt}`} href="index.html">
                                        Home
                                    </a>
                                    <a className={`${txt}`} href="about.html">
                                        About
                                    </a>
                                    <a className={`${txt}`} href="service.html">
                                        Services
                                    </a>
                                    <a className={`${txt}`} href="why.html">
                                        Why Us
                                    </a>
                                    <a className={`${txt}`} href="team.html">
                                        Team
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 info_col ">
                            <h4 className={`${txt}`}>
                                Subscribe
                            </h4>
                            <form action="#">
                                <Input type="text" placeholder="Enter email" />
                                <Button variant="outline" className="mt-4">
                                    Submit
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}