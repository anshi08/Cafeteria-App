import { Button, Typography } from "@mui/material";
import CardImg from "../assets/cardImg.jpg"
import {motion} from 'framer-motion'
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import CurrencyRupeeTwoToneIcon from '@mui/icons-material/CurrencyRupeeTwoTone';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import Swal from 'sweetalert2'

function CurrentOrders() {

  // fetch this sampleOrders form firebase in real time
  const sampleOrders = [
    {
      name: "John Doe",
      enroll: "EN123456",
      orderId: "ORD001",
      orderItems: ["Item1", "Item2", "Item3"],
      totalCost: 100
    },
    {
      name: "Alice Smith",
      enroll: "EN789012",
      orderId: "ORD002",
      orderItems: ["Item4", "Item5"],
      totalCost: 75
    },
    {
      name: "Bob Johnson",
      enroll: "EN345678",
      orderId: "ORD003",
      orderItems: ["Item6"],
      totalCost: 50
    },
    {
      name: "Emily Brown",
      enroll: "EN901234",
      orderId: "ORD004",
      orderItems: ["Item7", "Item8"],
      totalCost: 90
    },
    {
      name: "David Wilson",
      enroll: "EN567890",
      orderId: "ORD005",
      orderItems: ["Item9", "Item10", "Item11"],
      totalCost: 120
    },
    {
      name: "Emma Taylor",
      enroll: "EN345678",
      orderId: "ORD006",
      orderItems: ["Item12"],
      totalCost: 30
    },
    {
      name: "Michael Anderson",
      enroll: "EN678901",
      orderId: "ORD007",
      orderItems: ["Item13", "Item14", "Item15"],
      totalCost: 150
    },
    {
      name: "Olivia Martinez",
      enroll: "EN234567",
      orderId: "ORD008",
      orderItems: ["Item16"],
      totalCost: 40
    },
    {
      name: "James Garcia",
      enroll: "EN890123",
      orderId: "ORD009",
      orderItems: ["Item17", "Item18"],
      totalCost: 80
    },
    {
      name: "Sophia Hernandez",
      enroll: "EN456789",
      orderId: "ORD010",
      orderItems: ["Item19"],
      totalCost: 25
    },
    {
      name: "William Young",
      enroll: "EN012345",
      orderId: "ORD011",
      orderItems: ["Item20", "Item21"],
      totalCost: 70
    },
    {
      name: "Isabella King",
      enroll: "EN789012",
      orderId: "ORD012",
      orderItems: ["Item22", "Item23"],
      totalCost: 85
    },
    {
      name: "Ethan Lee",
      enroll: "EN567890",
      orderId: "ORD013",
      orderItems: ["Item24"],
      totalCost: 35
    },
    {
      name: "Ava Adams",
      enroll: "EN890123",
      orderId: "ORD014",
      orderItems: ["Item25", "Item26", "Item27"],
      totalCost: 110
    },
    {
      name: "Mason Wright",
      enroll: "EN234567",
      orderId: "ORD015",
      orderItems: ["Item28"],
      totalCost: 45
    }
  ];

  const HandleNavigate = () => {
     window.history.back();
  }

  const handleReject = () => {
    Swal.fire({
      title: 'Order Rejected',
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }

  const handleApprove = () => {
    Swal.fire({
      icon: "success",
      title: "Order Accepted Successfully",
      confirmButtonText: 'OK'
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
    <ArrowBackTwoToneIcon onClick={HandleNavigate} className="cursor-pointer"/>  Current Orders
    </Typography>
  </div>

   {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 ">
      {sampleOrders.map((data, idx) => (
        <div key={idx} className="max-w-sm bg-white border border-gray-200 
        shadow dark:bg-gray-800 dark:border-gray-700 m-4">
          
          <img

            style={{ width: '100%', height: '200px' }}
            src={CardImg} alt="Image" />
          <div className="p-5">
            <h5
              className="mb-2 text-2xl font-bold tracking-tight text-gray-900 
              dark:text-white text-center">Orders Details</h5>
            <div className="flex items-center gap-2 mb-2 my-3">
              <BorderColorTwoToneIcon />
              <span className="text-lg text-center" style={{
                fontStyle: 'normal', fontSize: '12px',
                lineHeight: '28px', letterSpacing: '0px',
                textAlign: 'center', fontWeight: 600,
                marginTop: '3px'
              }}>Order ID: {data.orderId}</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <ConfirmationNumberIcon />
              <span className="text-lg" style={{
                fontStyle: 'normal', fontSize: '12px',
                lineHeight: '28px', letterSpacing: '0px',
                textAlign: 'center', fontWeight: 600,
                marginTop: '3px'
              }}>Enroll: {data.enroll}</span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <BadgeTwoToneIcon />
              <span className="text-lg" style={{
                fontStyle: 'normal', fontSize: '12px',
                lineHeight: '28px', letterSpacing: '0px',
                textAlign: 'center', fontWeight: 600,
                marginTop: '3px'
              }}>Name: {data.name}</span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <CategoryTwoToneIcon />
              <span className="text-lg" style={{
                fontStyle: 'normal', fontSize: '12px',
                lineHeight: '28px', letterSpacing: '0px',
                textAlign: 'center', fontWeight: 600,
                marginTop: '3px'
              }}>Order Items: {data.orderItems.join(', ')}</span>
            </div>

            <div className="flex items-center gap-2 mb-2" >
              <CurrencyRupeeTwoToneIcon />
              <span className="text-lg 
      "style={{
                  fontStyle: 'normal', fontSize: '12px',
                  lineHeight: '28px', letterSpacing: '0px',
                  textAlign: 'center', fontWeight: 600,
                  marginTop: '5px'
                }}>Total Cost:  ${data.totalCost}</span>
            </div>

            <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <Button variant='contained' 
                style={{ backgroundColor: 'green', color: 'white',borderRadius:'2rem' }} 
                onClick={handleApprove}>
                  Approve
                </Button>
                <Button variant='contained' 
                style={{ backgroundColor: 'red', color: 'white',borderRadius:'2rem' }} 
                onClick={handleReject}>
                  Reject
                </Button>
              </div>
           
          </div>
        </div>
      ))}
    </div>
    </>
  );
}


export default CurrentOrders;