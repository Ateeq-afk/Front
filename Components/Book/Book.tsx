'use client'
import React,{useState,useEffect} from 'react'
import {IoIosArrowDropleft} from 'react-icons/io'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {FaRupeeSign} from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faPlay } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
interface BookingProps {
  onClose: () => void;
  Batch: { date: string }[]; // Modify according to the actual structure of Batch
  reserveamount: number;
  foramount: number;
  withoutamount: number;
  name: string;
  testimage: string;
  maintype : string;
}
type RazorpayResponse = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  // Add other properties you expect in the response
};
declare global {
  interface Window {
    Razorpay: any; // Use 'any' or a more specific type if available
  }
}
interface RequestBody {
  eventName: string;
  selecteddate: string;
  username: string;
  phonenumber: string;
  email: string;
  amount: string;
  tickets: number;
  payableamount: string;
  pendingamount: number;
  source: string;
  gst: string;
  withtransport: number;
  withouttransport: number;
  totalamount: string;
  tcs?: string; // Optional TCS property
}
export {};
const Booking = ({ onClose, Batch, reserveamount, foramount, withoutamount ,name,testimage, maintype}: BookingProps) => {
    const ticketPrice = foramount;
    const firstTicketPrice = reserveamount;
    const transportPrice = withoutamount;
    const [isTabOneActive, setIsTabOneActive] = useState(true);
    const [ticketCount, setTicketCount] = useState(1);
    const [ticketCount1, setTicketCount1] = useState(0);
    const [isShow, setIsShow] = useState(false);
    const [isCheckboxTicked, setIsCheckboxTicked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [subtractedAmount, setSubtractedAmount] = useState(0);
    // Function to handle the checkbox change event
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
    }

    const getSubtotal = (
      ticketPrice: number, 
      ticketCount: number, 
      transportPrice: number, 
      ticketCount1: number
    ): number => {
    
      let subtotal = 0;
      
      if (transportPrice !== null && transportPrice !== undefined) {
        subtotal = ticketPrice * ticketCount + transportPrice * ticketCount1;
      } else {
        subtotal = ticketPrice * ticketCount;
      }
    
      console.log("Calculated Subtotal:", subtotal);
      
      return subtotal;
    };
    const getTcs = () => {
      if (maintype === 'international') {
        return getSubtotal(ticketPrice, ticketCount, transportPrice, ticketCount1) * 0.05;
      }
      return 0;
    };
    const getGst = () => {
      const gstValue = getSubtotal(ticketPrice, ticketCount, transportPrice, ticketCount1) * 0.05;
      return gstValue;
    };
    
    const getTotal = () => {
      const totalValue = getSubtotal(ticketPrice, ticketCount, transportPrice, ticketCount1) + getGst() + getTcs();;
      return totalValue;
    };
    const getSubtotalFirst = () => {
        return firstTicketPrice  * (ticketCount + ticketCount1);
      };
    
      const getGstFirst = () => {
        return getSubtotalFirst() * 0.05;
      };
      const getTcsFirst = () => {
        if (maintype === 'international') {
          return getSubtotalFirst() * 0.05;
        }
        return 0;
      }
      const getTotalFirst = () => {
        return getSubtotalFirst() + getGstFirst() + getTcsFirst();
    };
    const toggleDiv = () => {
        setIsShow(!isShow);
    };
    const handleIncreaseTicket = () => {
        setTicketCount(prev => prev + 1);
      };
    
      const handleDecreaseTicket = () => {
        if (ticketCount > 0) {
          setTicketCount(prev => prev - 1);
        }
      };
      const handleIncreaseTicket1 = () => {
        setTicketCount1(prev => prev + 1);
      };
    
      const handleDecreaseTicket1 = () => {
        if (ticketCount1 > 0) {
          setTicketCount1(prev => prev - 1);
        }
      };
  
    const [inputValue, setInputValue] = useState({
        date: '',
        name: '',
        email: '',
        number: '',
      });
      const [amount, setAmount] = useState(
        isCheckboxTicked ? parseFloat(getTotal().toFixed(2)) : parseFloat(getTotalFirst().toFixed(2))
      );
      // const [amount, setAmount] = useState()
      useEffect(() => {
        if (isCheckboxTicked) {
          setAmount(parseFloat(getTotal().toFixed(2)));
        } else {
          setAmount(parseFloat(getTotalFirst().toFixed(2)));
        }
      }, [isCheckboxTicked, ticketCount, ticketCount1]);
      useEffect(() => {
        const result = Math.abs(getTotalFirst() - amount);
        console.log("result", result)
        setSubtractedAmount(result);
      }, [amount]);
      console.log("subtractedAmount",subtractedAmount)
      console.log(amount,"amount")
    const allFieldsFilled = Object.values(inputValue).every(input => input !== '');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setInputValue(prev => ({
        ...prev,
        [name]: value
      }));
    };
    
    
      
    const switchToTabTwo = () => {
        if (allFieldsFilled) {
            setIsTabOneActive(false);
        }
    };

    const switchToTabOne = () => {
    
            setIsTabOneActive(true)
        
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();  // Prevents the default form submission behavior
        switchToTabTwo();
    };
    const initiateAndPay = async () => {
      const loadRazorpayScript = () => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = initializePayment; // Call the payment initialization function when the script is loaded
        document.head.appendChild(script);
      };
    
      const initializePayment = async () => {
        
        const requestBody: RequestBody  = {
                        eventName: name,
                        selecteddate: inputValue.date,
                        username: inputValue.name,  // Replace with actual data
                        phonenumber: inputValue.number,  // Replace with actual data
                        email: inputValue.email, 
                        amount: isCheckboxTicked ? getTotalFirst().toFixed(2) : getTotal().toFixed(2),
                        tickets: ticketCount + ticketCount1,
                        payableamount: getTotalFirst().toFixed(2),
                        pendingamount: subtractedAmount,
                        source: 'Razorpay',
                        gst:  isCheckboxTicked ? getGstFirst().toFixed(2) : getGst().toFixed(2) ,
                        withtransport: ticketCount,
                        withouttransport : ticketCount1,
                        totalamount:    isCheckboxTicked ? getTotalFirst().toFixed(2) : getTotal().toFixed(2) 
        };
        if (maintype === 'international') {
          requestBody.tcs = isCheckboxTicked ? getTcsFirst().toFixed(2) : getTcs().toFixed(2);
        }
        try {
          const resInitiate = await fetch('https://launch-api1.vercel.app/bookb/initiatePayment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
          });
    
          const dataInitiate = await resInitiate.json();
          console.log('Initiate Payment Response:', dataInitiate);

          if (!dataInitiate || !dataInitiate.order || typeof dataInitiate.order.amount !== 'number') {
            throw new Error('Invalid response data');
          }
          console.log('Initiate Payment Response:', dataInitiate);
          const options = {
            key: process.env.RAZORPAY_KEY_ID,
            amount: dataInitiate.order.amount,
            currency: dataInitiate.order.currency,
            name: 'Backpackers United Pvt Ltd',
            description: 'Booking Transaction',
            order_id: dataInitiate.order.id,
            handler: (response : any) => {
              alert('Your Booking has been confirmed. You can check mail for further details');
              onClose();
            },
          };
    
          const rzp = new window.Razorpay(options);
          rzp.open();
        } catch (error) {
          console.error('Error during payment initiation:', error);
        }
      };
    
      loadRazorpayScript();
    };
  

    return (
        <div className="fixed top-0 left-0 w-full h-full   flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto z-10">
            <div className="bg-black text-white rounded-xl shadow-lg mt-32 mb-2">

                {isTabOneActive ? (
                    <div className='w-auto' >
                    <div className='flex flex-row bg-form1 py-4 px-4 justify-between md:gap-5 gap-5 border-b border-gray-400'>
                        <button onClick={onClose} ><FontAwesomeIcon icon={faAnglesLeft} className="text-2xl text-gray-400 hover:text-yellow-500" /></button>
                        
                        <div className='text-xl font-bold text-center  rounded-lg '>
                                Booking Details
                                </div>
                            <div >
                            <div className="flex ">
      {/* First rounded circle */}
      <div className="relative">
      
  <FontAwesomeIcon icon={faPlay} className={`text-2xl ${isTabOneActive ? 'text-yellow-500' : 'text-blue-200'} flex items-center justify-center`}/>
 
        <div className="absolute h-0.5 w-[12px] bg-blue-200 top-[11px] left-[18px]"></div>
      </div>

       <FontAwesomeIcon icon={faPlay} className={`text-2xl ${!isTabOneActive ? 'text-yellow-500' : 'text-blue-200'} flex items-center justify-center ml-3`}/>

    </div>
                                </div>
                    </div>
                    <div className='flex flex-row px-5 pt-4 gap-4'>
  <div className='relative min-h-[60px] w-[120px]'>
    <Image src={`https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/${testimage}`} layout='fill' objectFit="cover" alt={name} className='rounded-lg' />
  </div>
  <div className='flex flex-col'>
  <div className='text-lg text-yellow-500 pt-1 text-center flex justify-center items-center '>
  <div className='max-w-[200px]  '>
    {name}
  </div>
</div>
<div className='max-w-[250px] '>
The world is a book, and those who do not travel read only one page.
  </div>
</div>
</div>

                    <div className='p-4'>
                    <form onSubmit={handleSubmit}>
                      <div className='border border-gray-500 p-4 rounded-lg'>
                    <div className="mb-2  rounded-lg">
        <label className="block text-sm  mb-2 text-yellow-500 ">Select Batch Dates</label>
                             <select className="w-full p-2 border rounded text-black" name="date"  value={inputValue.date}
                            onChange={handleChange}  required>
                               <option value="" >Please select the Date</option>
          {Batch ? Batch.map((batch, idx) => (
          <option value={batch.date} key={idx}>{batch.date}</option>
          )) : null}
            {/*  // <option value="Instagram">Instagram</option>
          // <option value="Google">Google</option>
          // <option value="Whatsapp">Whatsapp</option>
          // <option value="Other">Other</option>
       Add more sources as required */}
        </select>
      </div>
    
      <div className="mb-2   rounded-lg">
        <label className="block text-sm text-yellow-500  mb-2">Full Name</label>
        <input type="text" className="w-full p-2 border rounded text-black" placeholder="Full Name" name="name"  value={inputValue.name}
                            onChange={handleChange}   required/>
      </div>
      <div className='flex flex-row gap-2'>
         <div className="mb-2   rounded-lg md:w-[70%] w-[70%]">
          <label className="block text-sm text-yellow-500 mb-2">Phone Number </label>
          <input type="text" className="w-full p-2 border rounded text-black" placeholder="Phone Number" name="number" value={inputValue.number}
                            onChange={handleChange}  required/>
        </div>
      <div className="mb-2 rounded-lg w-full">
        <label className="block text-sm text-yellow-500 mb-2">Email Address</label>
        <input type="email" className="w-full p-2 border rounded text-black" placeholder="Email Address" name="email" value={inputValue.email}
                            onChange={handleChange}  required/>
      </div>
      </div>
      </div>
      <button type='submit' className="w-full bg-yellow-500 text-white p-3 rounded mt-2" >Next</button>
     
      </form>
          </div>
                    </div>
                ) : (
                    <div className='md:w-[420px] w-[375px]'>
                      <div className='flex flex-row bg-form1 p-4 justify-between md:gap-5 gap-5 '>
                        <button onClick={switchToTabOne} ><FontAwesomeIcon icon={faAnglesLeft} className="text-2xl text-gray-400 hover:text-yellow-500" /></button>
                    
                        <div className='flex flex-col justify-center '>
                            <div className='text-xl font-bold text-center'>
                                Book Your Slot Now
                                </div>
                            </div>
                            
                            <div className="flex  ">
      {/* First rounded circle */}
      <div className="relative">
        {/* <div className={`w-4 h-4 rounded-full ${isTabOneActive ? 'bg-yellow-500' : 'bg-blue-200'} flex items-center justify-center text-white`}>
        </div> */}
  <FontAwesomeIcon icon={faPlay} className={`text-2xl ${isTabOneActive ? 'text-yellow-500' : 'text-blue-200'} flex items-center justify-center`}/>
 
        <div className="absolute h-0.5 w-[12px] bg-blue-200 top-[11px] left-[18px]"></div>
      </div>

       <FontAwesomeIcon icon={faPlay} className={`text-2xl ${!isTabOneActive ? 'text-yellow-500' : 'text-blue-200'} flex items-center justify-center ml-3`}/>

    </div>
        </div>
        <div className={isShow ? 'block' : 'hidden'} >
                 <div className='px-6 border-t-5 border-gray-400 border-t-4 mt-5  text-gray-600 h-auto' >
                      <h3 className="text-xl font-semibold mb-3 mt-5 text-yellow-500"> Summary</h3>

<div className="mb-2 flex flex-row">
  <div className="w-[200px]">Total Price:</div>
  {/* <span>INR {getSubtotal().toFixed(2)}/-</span> */}
<span> INR { getSubtotal(ticketPrice, ticketCount, transportPrice, ticketCount1).toFixed(2) }</span>
</div>

<div className="mb-2 flex flex-row">
  <div className="w-[200px]">GST (5%):</div>
  <span>INR {getGst().toFixed(2)}/-</span>
</div>

{
      maintype === 'international' && (
        <div className="mb-2 flex flex-row">
          <div className="w-[200px]">TCS (5%):</div>
          <span>INR {getTcs().toFixed(2)}/-</span>
        </div>
      )
    }

<div className="mb-2 flex flex-row">
  <div className="w-[200px] font-bold">Final Payable Amount:</div>
  <span className='font-bold'>INR {getTotal().toFixed(2)}/-</span>
</div>

<div className="mb-2 flex flex-row">
  <div className="w-[200px] text-green-500 font-bold">Payable Now:</div>
  <span className='text-green-500 font-bold'> {isCheckboxTicked ? (
    <div>INR {getTotalFirst().toFixed(2)} /-</div>
  ) : (
    <div>INR {getTotal().toFixed(2)}/-</div>
  )}</span>
</div>
<div>To ensure your reservation is not cancelled, please ensure that the remaining balance is paid at least one day before your scheduled departure.

  </div>
                 </div>
</div>
                    <div className={isShow ? 'hidden' : 'block'}>
                    <div  className='border border-gray-400 rounded-xl m-2'>
                    <div className=" p-4 ">
               
                      <div className='flex flex-row justify-center items-center'>
                       <div> Batch Date&nbsp;:&nbsp; </div>   <div className='text-yellow-500'> {inputValue.date}</div>
                        </div>
                    <label className="block text-sm mt-2 text-yellow-500 ">Pick Your Preference(s)</label>
                 
                    <div className="flex items-center  justify-between space-x-4 rounded-xl p-1 pb-0 pt-2 bg-form1 ">
                      <span className='font-bold text-sm'>With transport: ₹ {ticketPrice}</span>
                      <button onClick={handleDecreaseTicket} className='pl-[100px]'>-</button>
                      <span>{ticketCount}</span>
                      <button onClick={handleIncreaseTicket}>+</button>
                    </div>
                 
                 {transportPrice && <div className="pt-2 ">
                    <div className="flex items-center  justify-between space-x-4 rounded-xl p-1 pt-0 pb-4 bg-form1 ">
                      <span className='font-bold text-sm'>Without transport: ₹ {transportPrice}</span>
                      <button onClick={handleDecreaseTicket1} className='pl-20'>-</button>
                      <span>{ticketCount1}</span>
                      <button onClick={handleIncreaseTicket1}>+</button>
                    </div>
                    </div>
             
}    
                  <div className="flex items-center justify-between   text-sm">
                  <label>
                      <input type="checkbox" className="mr-2 " onChange={() => setIsCheckboxTicked(!isCheckboxTicked)}/>
                     Reserve your slot by paying : INR  {getSubtotalFirst().toFixed(2)}/-
                    </label>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-sm">
                    <label>
                      <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
                      I have read and accept the Refunds, <Link href='/condition' className='text-yellow-500 hover:underline'>Cancellation Policy & Terms & Conditions</Link>
                    </label>
                  </div>
                  </div>
                  </div>
                  </div> 
             
                  <div className='p-4 flex justify-between bg-form1'>
                    <div className='flex flex-col '> 
                        <div > {isCheckboxTicked ? (
    <div><FaRupeeSign className='float-left text-xl pt-1 font-bold'/>{getTotalFirst().toFixed(2)} </div>
  ) : (
    <div><FaRupeeSign className='float-left text-xl pt-1 font-bold'/>{getTotal().toFixed(2)}</div>
  )}</div>
                        <div className='text-xs text-green-500 pl-2 cursor-pointer'   onClick={toggleDiv}>   {isShow ? 'Hide Details' : 'Show Details'} </div>
                    </div>
                  <button className= {`${isChecked ? 'bg-yellow-500' : 'bg-yellow-200'}  text-black w-40 h-10 rounded-lg `} onClick={initiateAndPay}  disabled={!isChecked} >Pay Now</button>
                </div>
                  </div>
                )}
            </div>
            </div>
    );

}

export default Booking
