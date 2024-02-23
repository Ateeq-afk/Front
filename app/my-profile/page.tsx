import Profile from '@/Components/Dashboard/Profile/Profile';
import Sidebar from '@/Components/Dashboard/Sidebar/Sidebar'
import Footer from '@/Components/Navbar/Footer/Footer'
import Header from '@/Components/Navbar/Header/Header'
const page = () => {
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
</div>
      <Footer />
    </div>
  )
}
export default page
