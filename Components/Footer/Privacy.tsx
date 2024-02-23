'use client'
import Footer from '@/Components/Navbar/Footer/Footer'
import Header from '@/Components/Navbar/Header/Header'
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className='bg-black text-white flex flex-col min-h-screen'>
    <Header />
    <div className='pt-12'></div>
    <div className='flex-grow'>
      <motion.div initial="initial" animate="animate"  className="flex flex-col items-center justify-center px-4 py-6">
        <h1  className="text-center text-6xl text-yellow-500 ">Privacy Policy
</h1>
        <div className="pt-2 md:pt-4 mb-6">
          <hr className="border-t-2 border-white md:w-[60px] w-[30px]" />
        </div>
        <motion.div className="w-full max-w-6xl mx-auto">
        <motion.h2  className="text-2xl font-bold pb-4">Introduction</motion.h2>
                    <p className="pb-4">BACKPACKERS UNITED PRIVATE LIMITED  ("we"/"our"/"us") recognizes the importance of your personal and financial information. We are committed to protecting your privacy in compliance with this policy when you use BU’s Website or App.
</p>
                <p className="pb-4">
</p>
<motion.div  className="text-2xl font-bold pb-4">Applicability
</motion.div>
<p>This policy applies to the information collected:</p>
<p>Via the Backpackers United Website or App.</p>
<p>Through electronic communication between you and Backpackers United.</p>
<p>It does not apply to information collected by third parties linked to or accessible from our Website or App.</p>
<motion.div className="text-2xl font-bold pb-4">Consent
</motion.div>
<p className="pb-4">By accessing and using our Website or App, you acknowledge and agree to this privacy policy. If you do not agree, please do not use our Website or App. If you represent another individual or entity, you confirm you have the authority to accept this policy on their behalf.</p>
<p className="pb-4"></p>
<motion.div  className="text-2xl font-bold pb-4">Information Collection and Use</motion.div>
<p className="pb-4">We collect various types of information, including:
</p>
<p className="pb-4">Personal information like name, address, email, phone number, and financial details.
</p>
<p className="pb-4">Non-identifying information such as geo-location, search history, and usage details.
</p>
<motion.div  className="text-2xl font-bold pb-4">Automatic Data Collection Technologies</motion.div>
<p className="pb-4">We utilize technologies like cookies, flash cookies, and web beacons to collect data about your interaction with our Website or App, including details about your device and browsing patterns.</p>
<motion.div className="text-2xl font-bold pb-4">Third-Party Tracking</motion.div>
<p className="pb-4">Third parties, such as advertisers or content providers, may use cookies and other tracking technologies to collect information about you when using our Website or App. We do not control these third-party technologies.</p>
<motion.div  className="text-2xl font-bold pb-4">Usage of Information</motion.div>
<p className="pb-4">We use your information to:</p>
<p className="pb-4">Provide and improve our Website or App services.</p>
<p className="pb-4">Offer personalized content.</p>
<p className="pb-4">Communicate with you about our products and services.</p>
<motion.div  className="text-2xl font-bold pb-4">Disclosure of Information</motion.div>
<p className="pb-4">We may share your information with service providers, business partners, or in the event of a business transfer. We may also share information for legal compliance, enforcing our terms, and protecting Backpackers United and its partners.</p>
<motion.div  className="text-2xl font-bold pb-4">Choices and Control</motion.div>
<p className="pb-4">You have control over your information, including options to refuse cookies and opt out of receiving promotional offers from us.</p>
<motion.div  className="text-2xl font-bold pb-4">Access and Correction</motion.div>
<p className="pb-4">You can review and modify your personal information through your account profile. We may not delete information if it requires deleting your account.</p>
<motion.div  className="text-2xl font-bold pb-4">Data Security</motion.div>
<p className="pb-4">We implement measures to protect your data, but no system is entirely secure. We are not liable for unauthorized access to your account.</p>
<motion.div  className="text-2xl font-bold pb-4">Changes to the Policy</motion.div>
<p className="pb-4">We may update this policy, and changes will be posted on this page. You are responsible for periodically reviewing the policy.</p>
<motion.div  className="text-2xl font-bold pb-4">Use by Minors</motion.div>
<p className="pb-4">Our Website and App are not intended for minors. Parents or guardians should supervise minors using our services.</p>
<motion.div  className="text-2xl font-bold pb-4">Account Closure and Contact Information</motion.div>
<p className="pb-4">To close your account or inquire about our privacy practices, contact us at info@backpackersunited.in or at our postal address.</p>
<motion.div  className="text-2xl font-bold pb-4">Governing Law and Dispute Resolution</motion.div>
<p className="pb-4">Disputes relating to this policy will be governed by Indian law and resolved through arbitration in Bangalore, India.</p>
<motion.div  className="text-2xl font-bold pb-4">Final Statement</motion.div>
<p className="pb-4">BACKPACKERS UNITED PRIVATE LIMITED  is dedicated to safeguarding your privacy and ensuring your personal information is protected. This policy is effective upon your acceptance and continued use of our Website or App signifies agreement with its terms.</p>
<motion.div  className="text-2xl font-bold pb-4"></motion.div>
<p className="pb-4">
</p>
</motion.div>
  </motion.div>
      </div>
      <Footer />
      </div>
  )
}
export default Privacy
