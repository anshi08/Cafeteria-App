import React, { useState } from 'react';
// import './Inventory.css';
import { TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import CurrencyRupeeTwoToneIcon from '@mui/icons-material/CurrencyRupeeTwoTone';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Swal from 'sweetalert2';

function Inventory() {
  // fetch this sampleOrders form firebase in real time
  const sampleOrders = [
    {
      "id": 1,
      "name": "Samosa",
      "price": "20",
      "availability": false
    },
    {
      "id": 2,
      "name": "Pizza",
      "price": "20",
      "availability": true
    },
    {
      "id": 3,
      "name": "Tacos",
      "price": "10",
      "availability": true
    },
    {
      "id": 4,
      "name": "Kachori",
      "price": "20",
      "availability": true
    },
    {
      "id": 5,
      "name": "Tea",
      "price": "10",
      "availability": true
    },
    {
      "id": 6,
      "name": "Sandwich",
      "price": "20",
      "availability": true
    },
    {
      "id": 7,
      "name": "Cold Drink",
      "price": "40",
      "availability": true
    }
  ];

  const [change, setChange] = useState('')
  const [validation, setValidation] = useState({});

  const HandleNavigate = () => {
    window.history.back();
  }


  const handleUpdateInventory = (itemId) => {
    
    if (!change[itemId]) {
      
      setValidation({ ...validation, [itemId]: true });
      return; 
    }
  
    
    setValidation({ ...validation, [itemId]: false });
  
    
    const updatedItem = sampleOrders.find(item => item.id === itemId);
    Swal.fire({
      title: `Updating inventory for item: ${updatedItem.name}`,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }
  



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
          <ArrowBackTwoToneIcon onClick={HandleNavigate} className="cursor-pointer" />  Inventory
        </Typography>
      </div>

      {/* Table */}

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
                        <span>Item Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-center text-lg font-bold text-gray-700"
                      >
                        Price
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-lg font-bold text-gray-700"
                      >
                        Availability
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-lg font-bold text-gray-700"
                      >
                        Update Inventory
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-center text-lg font-bold text-gray-700"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {sampleOrders.map((data) => (
                      <tr key={data.id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center justify-center">
                            {/* <div className="h-10 w-10 flex-shrink-0">
                                            <img
                                                className="h-10 w-10 rounded-full object-cover"
                                                src={data.img}
                                                alt=""
                                            />
                                        </div> */}
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{data.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4 text-center">
                          <div className="text-sm text-gray-900 "><CurrencyRupeeTwoToneIcon />{data.price}</div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4 text-center">
                          <div className="text-sm text-gray-900 ">{data.availability ? 'Available' : 'Not Available'}</div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4 text-center">
  <TextField
    id={`outlinedinput-${data.id}`}
    label="Update Inventory"
    type="text"
    value={change[data.id] || ''}
    onChange={(e) => setChange({ ...change, [data.id]: e.target.value })}
    required // Add the required attribute
    error={validation[data.id]} // Set error prop based on validation state
    helperText={validation[data.id] ? "This field is required" : ""} // Display error message
  />
</td>
                        <td className="whitespace-nowrap px-12 py-4 text-center">
                          <CheckCircleOutlineIcon
                            className='cursor-pointer'
                            onClick={() => handleUpdateInventory(data.id)}
                          />
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
  );
}

export default Inventory;
