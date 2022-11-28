import React from 'react'
import { useCentersListQuery } from '../features/apiSlices/bloodCentersApiSlice'

const RequestBlood = () => {
    //get centers list
    const { data: centersList, error, isLoading } = useCentersListQuery()
    return (
        <div className='flex flex-col items-center justify-start md:justify-center w-full min-h-[90vh]'>
            <div className='w-full md:max-w-2xl h-full md:h-auto md:shadow-xl md:rounded-[6px]'>
                <div className='flex flex-col gap-2 items-center h-full py-8 px-6 md:px-8'>
                    <h1 className='my-4 text-2xl md:text-[32px]'>Request Blood</h1>
                    {/* Create a form to get user's blood type, gender, center or hospital and phone number */}
                    <form className='flex flex-col gap-4 items-center w-full'>
                        <select className='w-full h-full p-4 bg-[#F2F2F2] rounded-[3px] focus:outline-none focus:shadow-outline border-none focus:ring-0'>
                            <option value="">Blood Type</option>
                            <option value='A+'>A+</option>
                            <option value='A-'>A-</option>
                            <option value='B+'>B+</option>
                            <option value='B-'>B-</option>
                            <option value='AB+'>AB+</option>
                            <option value='AB-'>AB-</option>
                            <option value='O+'>O+</option>
                            <option value='O-'>O-</option>
                        </select>
                        <select className='w-full h-full p-4 bg-[#F2F2F2] rounded-[3px] focus:outline-none focus:shadow-outline border-none focus:ring-0'>
                            <option value="" className='text-[#BFBFBF]'>Gender</option>
                            <option value='Male'>Male</option>
                            <option value='Male'>Female</option>
                        </select>
                        <select className='w-full h-full p-4 bg-[#F2F2F2] rounded-[3px] focus:outline-none focus:shadow-outline border-none focus:ring-0'>
                            {isLoading && <option value="" className='text-[#BFBFBF]'>Center and Hospitals</option>}
                            {centersList && centersList.map((center, index) => (
                                <option key={index} value={center.center_name} className='text-[#BFBFBF]'>{center.center_name}</option>
                            ))}
                        </select>
                        <input
                            className="appearance-none rounded w-full p-4 bg-[#F2F2F2] placeholder-[#BFBFBF] mb-3 leading-tight focus:outline-none focus:shadow-outline border-none focus:ring-0"
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="Phone Number"
                            required
                        />
                        <button
                            type="submit"
                            className="text-white px-7 transform sm:uppercase text-lg bg-[#F00530] hover:bg-red-800 focus:ring-4 focus:outline-none leading-loose focus:ring-red-300 font-medium rounded-[4px]  w-full py-2 lg:py-4 text-center"
                        >
                            Send Request
                        </button>
                        <p className='text-[#333333] pt-4 md:pt-2 pb-4 md:pb-8'>We wil send a donor to the centre as
                            given as soon as possible. </p>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default RequestBlood
