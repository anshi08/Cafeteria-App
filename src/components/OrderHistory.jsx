import React from 'react'
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import OrderImg from "../assets/img.jpg"
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';

const orderHistories = [
    {
        id: 1,
        date: "2024-03-04",
        items: [
            { name: "Coffee", price: "20" },
            { name: "Pizza", price: "15" }
        ],
        img: OrderImg
    },
    {
        id: 2,
        date: "2024-03-03",
        items: [
            { name: "Kachori", price: "10" },
            { name: "BreadPakoda", price: "12" }
        ],
        img: OrderImg
    }
];
const HandleNavigate = () => {
    window.history.back();
}

const handleExcelFile = () => {
    alert("Working on it")
}

function OrderHistory() {
    return (
        <>

            {/* heading */}
            <div className="flex flex-col 
    sm:flex-row  sm:space-y-0 
    flex-1 w-full justify-between mt-6 px-10">
                <Typography
                    component={motion.span}
                    initial={{ x: -20 }}
                    animate={{ x: 0, transition: { delay: 0.2 } }}
                    delay={300}
                    style={{
                        fontStyle: "normal",
                        fontSize: "24px",
                        lineHeight: "28px",
                        letterSpacing: "0px",
                        fontWeight: "bold",
                    }}
                >
                    <ArrowBackTwoToneIcon onClick={HandleNavigate} className="cursor-pointer" /> Order History
                </Typography>

                <button onClick={handleExcelFile}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Export to Excel <DownloadRoundedIcon />
                    </span>
                </button>
            </div>


            <section className="mx-auto w-full max-w-7xl px-4 py-4">

                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-center text-lg font-bold
                                              text-gray-700"
                                            >
                                                <span>Id</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-center text-lg font-bold text-gray-700"
                                            >
                                                Date
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-center text-lg font-bold text-gray-700"
                                            >
                                                Items
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {orderHistories.map((data) => (
                                            <tr key={data.id}>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="flex items-center justify-center">
                                                        <div className="h-10 w-10 flex-shrink-0">
                                                            <img
                                                                className="h-10 w-10 rounded-full object-cover"
                                                                src={data.img}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{data.id}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-12 py-4 text-center">
                                                    <div className="text-sm text-gray-900 ">{data.date}</div>
                                                </td>
                                                <td className="whitespace-nowrap px-12 py-4 text-center">
                                                    <div className="text-sm text-gray-900 "> {data.items.map(item => `${item.name}: $${item.price}`).join(', ')}</div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderHistory
