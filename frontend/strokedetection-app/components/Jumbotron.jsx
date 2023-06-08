import Link from "next/link";

export default function Jumbotron() {
    return (
        <div className="bg-blue-2">
            <div className="p-4 h-[70vh] flex justify-between m-auto max-w-screen-xl">
                <div className="my-auto block">
                    <div  className="text-3xl font-bold">
                        <p>Detecting</p>
                        <p>Stroke Symptoms</p>
                    </div>
                    <Link href="/FormPage">
                        <div className="bg-blue-1 mt-4 py-2 text-center rounded-md">
                            <p className="text-white"> Start Detection</p>
                        </div>
                    </Link>
                </div>
                <img src="./jumbotron.svg" alt="ilustrasi kesehatan" className="w-[500px]"/>
            </div>
        </div>
    )
}