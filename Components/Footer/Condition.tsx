'use client'
import Footer from '@/Components/Navbar/Footer/Footer'
import Header from '@/Components/Navbar/Header/Header'
import { motion } from 'framer-motion';
const Condition = () => {
  return (
    <div className='bg-black text-white flex flex-col min-h-screen'>
    <Header />
    <div className='pt-12'></div>
    <div className='flex-grow'>
      <motion.div initial="initial" animate="animate"  className="flex flex-col items-center justify-center px-4 py-6">
        <h1  className="text-center md:text-6xl text-4xl text-yellow-500 ">Terms And Conditions</h1>
        <div className="pt-2 md:pt-4 mb-6">
          <hr className="border-t-2 border-white md:w-[60px] w-[30px]" />
        </div>
        <motion.div className="w-full max-w-6xl mx-auto">
        <motion.h2  className="text-2xl font-bold pb-4">Important Notice</motion.h2>
                    <p className="pb-4">Your engagement with BACKPACKERS UNITED PRIVATE LIMITED is governed by these essential Terms and Conditions, shaping the foundation of our collaboration.They outline your rights, obligations, and restrictions you may face. Please review them carefully. By ordering products or services from our website, you signify your agreement to these terms.</p>
                    <div className="pb-4">
</div>
<motion.div  className="text-2xl font-bold pb-4">Eligibility</motion.div>
            <p>You must be at least 18 years old to use our services.Do not use our website if you disagree with these terms, are not of legal age, or are barred from using our website under applicable laws.Do not use our website if you disagree with these terms, are not of legal age, or are barred from using our website under applicable laws.</p>
            <p>
</p>
<motion.div className="text-2xl font-bold pb-4">Applicability</motion.div>
<p className="pb-4">These Terms apply to all transactions on Backpackers United's website (backpackersunited.in).
We may modify these Terms without prior notice, and it's your responsibility to review them regularly. Continued use of our website after changes implies your acceptance.</p>
<p className="pb-4"></p>
<motion.div  className="text-2xl font-bold pb-4">Order Acceptance and Cancellation
</motion.div>
<p className="pb-4">Your order represents an offer to purchase, which we must accept.We may decline orders at our discretion. An order confirmation email signifies our acceptance of your order. You may cancel your order as outlined.
</p>
<p className="pb-4">Please note that cancellation fees may apply and that refunds may not be available for certain non-refundable bookings. Any changes or cancellations must be made through our Website or by contacting our customer support.
</p>
<motion.div  className="text-2xl font-bold pb-4">Pricing and Payment
</motion.div>
<p className="pb-4">Prices on our website are subject to change without notice. The final cost will include applicable taxes and will be detailed at checkout. Payment for orders is processed via a third-party gateway, for which additional terms may apply. We are not liable for issues arising from payment gateway transactions.</p>
<motion.div className="text-2xl font-bold pb-4">Delivery
</motion.div>
<p className="pb-4">Products and services will be delivered through third-party vendors. We are not responsible for any payments made directly to these providers.
</p>
<motion.div  className="text-2xl font-bold pb-4">Smoking and Alcohol Policy
</motion.div>
<p className="pb-4">The consumption of alcohol is strictly prohibited unless explicitly permitted by Backpackers United under certain circumstances. This policy is to ensure safety and compliance with legal standards.
</p>
<motion.div  className="text-2xl font-bold pb-4">Cancellations and Refunds
</motion.div>
<p className="pb-4">Cancellations must be requested in writing to info@backpackersunited.in 7 days before the date of travel. 
Cancellation charges are detailed on our product pages and are due to potential losses incurred by us. Refunds are processed within 7-10 business days.
</p>
<motion.div  className="text-2xl font-bold pb-4">Privacy
</motion.div>
<p className="pb-4">Your privacy is important to us. Please review our Privacy Policy on (privacy policy link) for details on how we handle your personal information.
</p>
<motion.div  className="text-2xl font-bold pb-4">Force Majeure
</motion.div>
<p className="pb-4">Our company is not responsible or liable for any failure or delay in performing our obligations under these Terms due to circumstances beyond our reasonable control. This includes, but is not limited to, unforeseen events such as natural disasters (like floods, earthquakes, or fires), explosions, actions by government authorities, conflicts like wars, invasions, or terrorism, public disturbances such as riots or widespread civil unrest, national crises, rebellions, epidemics, strikes or labor disputes not involving our employees, challenges faced by transportation carriers, or delays in receiving necessary materials due to shortages or disruptions. This also covers issues like telecommunications failures or power outages.
</p>
<motion.div  className="text-2xl font-bold pb-4">Governing Law and Jurisdiction
</motion.div>
<p className="pb-4">These Terms are governed by Indian law, with Bangalore as the jurisdiction for any legal matters.
</p>
<motion.div  className="text-2xl font-bold pb-4">Dispute Resolution
</motion.div>
<p className="pb-4">Disputes will be resolved through arbitration in Bangalore, as per the Arbitration and Conciliation Act, 1996.
</p>
<motion.div  className="text-2xl font-bold pb-4">Assignment
</motion.div>
<p className="pb-4">You cannot assign these Terms without our consent. Any unauthorized assignment is null and void.
</p>
<motion.div  className="text-2xl font-bold pb-4">No Waivers
</motion.div>
<p className="pb-4">Failure to enforce any right doesn't constitute a waiver of future enforcement of that or any other right.
</p>
<motion.div  className="text-2xl font-bold pb-4">Notices
</motion.div>
<p className="pb-4">Notices to us should be sent to info@backpackersunited.in or our legal team in Bangalore. Email notices are effective when sent, and postal notices are effective upon receipt.
</p>
<motion.div  className="text-2xl font-bold pb-4">Severability
</motion.div>
<p className="pb-4">If any part of these Terms is found unenforceable, the rest will remain effective.
</p>
<motion.div  className="text-2xl font-bold pb-4">Entire Agreement
</motion.div>
<p className="pb-4">These Terms, along with our Website Terms of Use and Privacy Policy, constitute the entire agreement between you and BACKPACKERS UNITED PRIVATE LIMITED.
</p>      </motion.div>
      </motion.div>
      </div>
      <Footer />
      </div>
  );
};
export default Condition;
