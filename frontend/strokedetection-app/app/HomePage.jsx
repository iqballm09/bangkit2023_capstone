import TopNav from "@/components/TopNav";
import Jumbotron from "@/components/Jumbotron";
import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <div className="bg-blue-2">
                <div className="p-4 flex justify-between m-auto max-w-screen-xl">
                    <Link href="/">
                        <img src="./logo.svg" alt="+StrokeHealth" className="w-[200px]"/>
                    </Link>
                    <div className="bg-blue-1 py-2 px-4 rounded-md">
                        <p className=" text-white">Detect strokes</p>
                    </div>
                </div>
            </div>
            <Jumbotron/>
        </div>
    )
}