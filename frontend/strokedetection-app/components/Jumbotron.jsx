import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function Jumbotron() {
    return (
        <div className="bg-blue-2">
            <div className="p-4 h-[70vh] flex justify-between m-auto max-w-screen-xl">
                <div className="my-auto block">
                    <div  className="text-5xl font-bold mclaren">
                        <p>Detecting</p>
                        <p>Stroke Symptoms</p>
                    </div>
                    <Link href="/FormPage">
                        <div className="bg-blue-1 mt-14 py-2 px-8 rounded-md flex justify-between">
                            <p className="text-white text-lg py-2 text-center font-bold"> Start Detection</p>
                            <div className="py-2">
                                <BsArrowRightCircleFill color="white" size={28}/>
                            </div>
                        </div>
                    </Link>
                </div>
                <img src="./jumbotron.svg" alt="ilustrasi kesehatan" className="w-[500px]"/>
            </div>
        </div>
    )
}