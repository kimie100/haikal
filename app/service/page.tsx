import { Footer } from "@/components/footer";
import { ServiceIndex } from "@/components/index/service";





export default function Service() {
    return (
        <>
            <div className="bg-white">
                <ServiceIndex btnName='Start' goTo='/detail' />
            </div>
            <div>
                <Footer bg={"bg-[#1a0b4b]"} txt="text-white" />
            </div>
        </>
    )
}