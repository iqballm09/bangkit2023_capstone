import Link from "next/link";

export default function TopNav() {
    return (
        <div className="bg-white">
            <div className="p-4 flex justify-between m-auto max-w-screen-xl">
                <Link href="/">
                    <img src="./logo.svg" alt="+StrokeHealth" className="w-[200px]"/>
                </Link>
            </div>
        </div>
    )
}