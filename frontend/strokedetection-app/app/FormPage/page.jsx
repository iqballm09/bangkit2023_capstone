import TopNav from "@/components/TopNav";
import Link from "next/link";

export default function FormPage() {
    return (
        <>
            <TopNav/>
            <div className="py-8 px-10 m-auto max-w-screen-lg">
                <p className="font-bold text-xl">Complete some of your information to detect </p>
                <form className="grid grid-cols-2 gap-x-14 my-5">
                    <div>
                        <p>1. Choose your gender</p>
                        <select className="ring-2 ring-black w-full h-10 rounded-md mb-5 mt-3 text-sm px-4" type="teks" id="gender">
                            <option value=''>Choose</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                    </div>
                    <div>
                        <p>2. How old are you ?</p>
                        <input className="ring-2 ring-black w-full h-10 rounded-md mb-5 mt-3 text-sm px-4" type="number" name="" id="age" placeholder="Input your age"/>
                    </div>
                    <div>
                        <p>3. Do you have hipertension ?</p>
                        <div className="flex gap-4">
                            <input type="radio" id="yes" name="have_hipertention" value="yes" className="hidden"/>
                            <label for="yes" className="ring-2 ring-black w-full h-10 rounded-md mb-5 mt-3 text-sm text-center py-2">Yes</label>
                            <input type="radio" id="no" name="have_hipertention" value="no" className="hidden"/>
                            <label for="no" className="ring-2 ring-black w-full h-10 rounded-md mb-5 mt-3 text-sm text-center py-2">no</label>
                        </div>
                    </div>
                    <div>
                        <p>4. Do you have heart disease ?</p>
                        <div className="flex gap-4">
                            <input type="radio" id="yes2" name="heart_disease" value="yes2" className="hidden"/>
                            <label for="yes2" className="ring-2 ring-black w-full h-10 rounded-md mb-5 mt-3 text-sm text-center py-2">Yes</label>
                            <input type="radio" id="no2" name="heart_disease" value="no2" className="hidden"/>
                            <label for="no2" className="ring-2 ring-black w-full h-10 rounded-md mb-5 mt-3 text-sm text-center py-2">no</label>
                        </div>
                    </div>
                    <div>
                        <p>5. Do you ever been married ?</p>
                        <div className="flex gap-4">
                            <input type="radio" id="yes3" name="ever_been_married" value="yes3" className="hidden"/>
                            <label for="yes3" className="ring-2 ring-black w-full h-10 rounded-md mb-5 mt-3 text-sm text-center py-2">Yes</label>
                            <input type="radio" id="no3" name="ever_been_married" value="no3" className="hidden"/>
                            <label for="no3" className="ring-2 ring-black w-full h-10 rounded-md mb-5 mt-3 text-sm text-center py-2">no</label>
                        </div>
                    </div>
                    <div>
                        <p>6. Choose your work type ?</p>
                        <select className="ring-2 ring-black w-full h-10 rounded-md mb-5 mt-3 text-sm px-4" type="teks" id="work_type">
                            <option value=''>Choose</option>
                            <option value='Childern'>Childern</option>
                            <option value='Govt_jov'>Govt Jov</option>
                            <option value='Never_worked'>Never Worked</option>
                            <option value='Private'>Private</option>
                            <option value='Self-employed'>Self Employed</option>
                        </select>
                    </div>
                    <div>
                        <p>7. Choose your residence type</p>
                        <select className="ring-2 ring-black w-full h-10 rounded-md mb-5 mt-3 text-sm px-4" type="teks" id="Residence_type">
                            <option value=''>Choose</option>
                            <option value='Rural'>Rural</option>
                            <option value='Urban'>Urban</option>
                        </select>
                    </div>
                    <div>
                        <p>8. What is your average glucose level?</p>
                        <input className="ring-2 ring-black w-full h-10 rounded-md mb-5 mt-3 text-sm px-4" type="number" name="" id="glucosa_level " placeholder="Input your avg glucosa level"/>
                    </div>
                    <div className="col-span-2">
                        <p>9. What is your body mass index</p>
                        <input className="ring-2 ring-black w-full h-10 rounded-md mb-5 mt-3 text-sm px-4" type="number" name="" id="bmi" placeholder="Input your body mass index"/>
                    </div>
                    <Link href="/">
                        <button  className="ring-2 ring-blue-1 w-full h-12 rounded-md mb-5 mt-8 text-sm text-blue-1 font-bold shadow-lg">Cancel</button>
                    </Link>
                    <button className="bg-blue-1 ring-2 ring-blue-1 w-full h-12 rounded-md mb-5 mt-8 text-sm text-white font-bold shadow-lg" type="submit">See Reslut</button>
                </form>
            </div>
        </>
    )
}