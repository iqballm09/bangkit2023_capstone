import Jumbotron from "@/components/Jumbotron";
import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <div className="bg-blue-2">
                <div className="p-4 flex justify-between m-auto max-w-screen-xl">
                    <Link href="/">
                        <img src="./logo.svg" alt="+StrokeHealth" className="w-[200px] my-2"/>
                    </Link>
                </div>
            </div>
            <Jumbotron/>
        </div>
    )
}