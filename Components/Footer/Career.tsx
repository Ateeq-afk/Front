'use client'
import DynamicMetaTags from '@/Components/Dynamic/DynamicMetatag';
import Footer from '@/Components/Navbar/Footer/Footer'
import Header from '@/Components/Navbar/Header/Header'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';


const Career = () => {
  // Initialize state for the form data
  const currentPageUrl = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <div className='flex flex-col min-h-screen bg-black'>
    
    <Header />
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-grow container mx-auto px-4 py-24"
    >
        <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-4xl text-yellow-500 mb-6"
        >
            Careers
        </motion.h1>
        <div className="bg-yellow-500 h-1 w-24 mx-auto mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-8 mb-8 p-4 bg-gray-800 rounded-lg shadow-md"
            >
                <div>
                    <h2 className="text-2xl text-yellow-500 mb-2">Who We Are</h2>
                    <p className="text-white">Backpackers United is a passionate community of travelers who believe in the transformative power of travel. We're dedicated to empowering backpackers across the globe with resources, tips, and a supportive network of fellow adventurers.</p>
                </div>
                <div>
                    <h2 className="text-2xl text-yellow-500 mb-2">Why Join Us</h2>
                    <p className="text-white">Working with Backpackers United means becoming part of a vibrant, innovative team that's committed to redefining the backpacking experience. Our team members enjoy:</p>
                </div>
                <div>
                    <h2 className="text-2xl text-yellow-500 mb-2">Our team members enjoy:</h2>
                    <ul className="list-disc pl-5 text-white">
                        <li>The opportunity to shape the future of backpacking and travel.</li>
                        <li>A collaborative and supportive work environment.</li>
                        <li>The chance to meet and learn from fellow travel enthusiasts.</li>
                        <li>Flexible work arrangements to support your own travel aspirations.</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl text-yellow-500 mb-2">How to Apply</h2>
                    <p className="text-white">Please note that while we appreciate all applications, only those selected for an interview will be contacted.</p>
                    <p className="text-white">We're excited to hear from you!</p>
                    <p className="text-white">
                          Email: <a href="mailto:ashwin@backpackersunited.in" className="hover:text-yellow-500">ashwin@backpackersunited.in</a><br />
                          Phone: <a href="tel:+918310180586" className="hover:text-yellow-500">+91 8310180586</a>
                      </p>
                    <div className="flex space-x-2 mt-4">
                        <a href="https://www.facebook.com/backpackersunited1/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-yellow-500 transition-colors">
                            <FontAwesomeIcon icon={faFacebookF} className="text-white text-3xl" />
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=918310180586&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-yellow-500 transition-colors">
                            <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl" />
                        </a>
                        <a href="https://www.instagram.com/backpackers_united_/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-yellow-500 transition-colors">
                            <FontAwesomeIcon icon={faInstagram} className="text-white text-3xl" />
                        </a>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col space-y-8 p-4 bg-gray-800 rounded-lg shadow-md"
            >
                <div>
                    <h2 className="text-3xl text-yellow-500 mb-4">Get in Touch</h2>
                    <form className="flex flex-col gap-4 max-w-md">
                        <input type="text" placeholder="Your Name" className="p-2 bg-white rounded-md shadow-md" />
                        <input type="email" placeholder="Your Email" className="p-2 bg-white rounded-md shadow-md" />
                        <textarea placeholder="Your Message" className="p-2 bg-white h-32 rounded-md shadow-md"></textarea>
                        <button type="submit" className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition-colors">Submit</button>
                    </form>
                </div>
                <div className="flex-grow">
                    <div id="map" style={{ height: '100%', width: '100%' }}></div>
                </div>
            </motion.div>
        </div>
    </motion.div>
    <Footer />
</div>
);
};
export default Career;
