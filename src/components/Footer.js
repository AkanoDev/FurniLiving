import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="flex justify-center w-auto px-8 text-medium-gray bg-light-pink"
      id="contact"
    >
      <div className="grid lg:grid-cols-5 grid-cols-3 lg:px-20 py-10 lg:gap-16 gap-6">
        <div className="row-end-3 lg:row-end-1">
          <strong className="flex lg:text-3xl text-2xl pb-3 tracking-wider">
            Furniliving
          </strong>
          <div className="flex gap-4 pb-14">
            <FaXTwitter className="text-2xl " />
            <FaInstagram className="text-2xl hover:text-orange-600" />
            <FaFacebook className="text-2xl hover:text-blue-700" />
          </div>
          <p>Copyright © 2024 by Furnilizing, Inc. All rights reserved.</p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Services</h2>
          <p>Register</p>
          <p>Order</p>
          <p>Login</p>
          <p>Help Center</p>
        </div>

        <div className="flex flex-col gap-6 lg:row-end-1 row-end-3">
          <h2 className="text-xl font-semibold">Contact us</h2>
          <p>Eusebio Ave. Pinagbuhatan, Pasig</p>
          <p>960-4466-352 konichiwa@furniliving.com</p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Featured</h2>
          <p>New Products</p>
          <p>Best Quality</p>
          <p>Subscribe</p>
          <p>Social Media</p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Resources</h2>
          <p>Help center</p>
          <p>Privacy & terms</p>
        </div>
      </div>
    </footer>
  );
}
