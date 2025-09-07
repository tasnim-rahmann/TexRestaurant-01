import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 bg-[#1F2937]">
                    <div className="text-white py-6 lg:py-12 pl-0 lg:0pl-16 space-y-4">
                        <h2 className="text-2xl lg:text-3xl font-medium text-center">CONTACT US</h2>
                        <p className="text-center">
                            123 ABS Street, Uni 21, Bangladesh <br />
                            +88 123456789 <br />
                            Mon - Fri: 08:00 - 22:00 <br />
                            Sat - Sun: 10:00 - 23:00 <br />
                        </p>
                    </div>
                </div>
                <div className="flex-1 bg-[#111827]">
                    <div className="text-white py-6 lg:py-12 pr-0 lg:pr-16 space-y-4">
                        <h2 className="text-2xl lg:text-3xl font-medium text-center">Follow US</h2>
                        <p className="text-center">
                            Join us on social media
                        </p>
                        <p className="flex justify-center gap-6">
                            <span><FaFacebookF size={25} /></span>
                            <span><FaInstagram size={25} /></span>
                            <span><FaTwitter size={25} /></span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white text-center text-sm lg:text-lg font-medium p-2">
                <p>Copyright © Text Restaurant. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;