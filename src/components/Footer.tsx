import React from "react";
import ZLogo from "./ZLogo";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4 mt-8"> {/* Adjusted padding/margin */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-800 pt-8 text-sm text-center">
           {/* Use ZLogo component instead of plain text */}
           <div className="flex justify-center mb-4">
             <ZLogo size="sm" />
           </div>
          <p>
            © {new Date().getFullYear()} Zaptrix. All rights
            reserved.
          </p>
          {/* Example: Add more links if needed 
          <div className="mt-4 space-x-4">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
          </div> 
          */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;




// import React from "react";

// const Footer = () => {
//   return (
//     <>
//       <footer className="bg-gray-900 text-gray-300 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-white font-semibold text-lg mb-4">
//                 Zaptrix
//               </h3>
//               <p className="text-sm">
//                 Empowering innovators to build the future of software, one idea
//                 at a time.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-white font-semibold mb-4">Platform</h4>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Features
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Marketplace
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Community
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Resources
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-white font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Careers
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-white font-semibold mb-4">Legal</h4>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Privacy Policy
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Terms of Service
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Cookie Policy
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
//             <p>
//               &copy; {new Date().getFullYear()} Zaptrix. All rights
//               reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;
