export default function DetectionResult() {
    return (
        <div className="row-span-1 shadow-lg rounded-md p-8">
            <p className="font-bold text-lg">Detection Result</p>
            <div className="py-5 flex">
                <div className="grid grid-rows-10 mr-4">
                    <div className="bg-red h-4 w-5"></div>
                    <div className="bg-yellow h-4 w-5"></div>
                    <div className="bg-green h-16 w-5"></div>
                </div>
                <div>
                    <p className="text-xl font-bold">Risk Level</p>
                    <p className="text-6xl font-bold mt-1">12%</p>
                </div>
            </div>
            <p>You risk of stroke is <strong className="text-green">Low</strong></p>
            <div className="bg-blue-1 mt-4 py-2 text-center rounded-md shadow-lg">
                <p className="text-white">Re-check</p>
            </div>
        </div>
    )
}