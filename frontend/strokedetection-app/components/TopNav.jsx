import Link from "next/link";
import { BsHouseDoorFill } from "react-icons/bs";

export default function TopNav() {
    return (
        <div className="bg-white border-b-[1px] border-brown mb-5">
            <div className="p-4 flex justify-between m-auto max-w-screen-xl">
                <Link href="/">
                    <img src="./logo.svg" alt="+StrokeHealth" className="w-[200px]"/>
                </Link>
                <Link href="/">
                    <div className="flex gap-2">
                        <div className="py-1">
                            <BsHouseDoorFill size={21}/>
                        </div>
                        <p className="font-bold text-lg">Home</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}