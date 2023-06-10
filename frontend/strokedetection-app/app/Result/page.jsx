import Detail from "@/components/Detail";
import DetectionResult from "@/components/DetectionResult";
import Jumbotron from "@/components/Jumbotron";
import Recomendation from "@/components/Recomendation";
import TopNav from "@/components/TopNav";

export default function Result() {
    return (
        <>
            <TopNav/>
            <div className="grid grid-cols-2 gap-4 m-auto max-w-screen-xl p-4 montserrat">
                <div>
                    <DetectionResult/>
                    <Detail/>
                </div>
                <Recomendation/>
            </div>
        </>
    )
}