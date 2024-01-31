import Profile from '@/Components/Dashboard/Profile/Profile';
import Sidebar from '@/Components/Dashboard/Sidebar/Sidebar'
import Footer from '@/Components/Navbar/Footer/Footer'
import Header from '@/Components/Navbar/Header/Header'



const page = () => {
  const bookings = [
    { id: 'OD17027149846346', name: 'Kudremukh Trek', total: '₹0', status: 'Completed', createdAt: '16/12/2023 13:53' },
    { id: 'OD17027148356346', name: 'Kasol New Year 2024', total: '₹0', status: 'Pending', createdAt: '16/12/2023 13:50' },
    { id: 'OD17027108386346', name: 'Triund Trek From Delhi with Mcleodganj Sightseeing', total: '₹6823.95', status: 'Pending', createdAt: '16/12/2023 12:43' },
    // ... more bookings
  ];

  return (
    <div className='bg-black flex flex-col min-h-screen'>
        <Header />
        <div className='h-20'></div>

        <div className='flex flex-grow'>
        <aside className="bg-black ">
    <Sidebar />
  </aside>
    
  <div className="flex flex-grow bg-black min-h-screen text-black pt-2 w-full ">
    <Profile />
    </div>

  {/* Main Content */}
</div>
      <Footer />
    </div>
  )
}

export default page
