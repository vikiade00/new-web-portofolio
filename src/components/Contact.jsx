import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  PaperPlaneTilt,
  Phone,
  PlugsConnected,
  Spinner,
} from "@phosphor-icons/react";
import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsLoading(true);

    const form = e.target;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICEID,
        import.meta.env.VITE_EMAILJS_TEMPLATEID,
        form,
        import.meta.env.VITE_EMAILJS_USERID
      )
      .then((response) => {
        console.log("Email sent successfully:", response);

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        // Show success toast
        toast.success("Message sent successfully!");
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);

        // Show error toast
        toast.error("Error sending message. Please try again later.");
      });
  };

  return (
    <div id="contact" className="bg-gray-50 py-20 mt-24">
      <Toaster />
      <div className="flex gap-10 w-[80%] md:w-4/6 mx-auto rounded-lg py-10 shadow-lg md:p-10 justify-center bg-white flex-wrap md:flex-nowrap ">
        <div className="md:w-1/2">
          <div>
            <div className="text-4xl text-blue-600 font-semibold mb-5 flex items-center gap-2">
              <div>Contact</div>
              <div>
                <span className="">
                  <Phone weight="fill" />
                </span>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border rounded-lg pl-3 border-gray-400 h-8"
                type="text"
                placeholder="Your Name"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border rounded-lg pl-3 border-gray-400 h-8"
                type="email"
                placeholder="Your Email"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="border rounded-lg pl-3 border-gray-400"
                rows={6}
                placeholder="Your Message"
              />
              <button
                type="submit"
                className="border flex justify-center py-1 hover:bg-blue-700 bg-blue-600 w-auto rounded-lg text-white"
              >
                <div>
                  {isLoading ? (
                    <div className="py-1">
                      <Spinner />
                    </div>
                  ) : (
                    <div className="flex justify-center items-center gap-1">
                      Send <PaperPlaneTilt />
                    </div>
                  )}
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="text-4xl px-10 md:px-0 text-blue-600 font-semibold mb-5 text-center flex justify-center items-center gap-2">
            <div>Connect With Me</div>
            <div>
              <span className="">
                <PlugsConnected weight="fill" />
              </span>
            </div>
          </div>
          <div className="px-10 md:px-0">
            <div>
              Feel free to reach out to me through the above platforms. I am
              excited to engage, collaborate, and build meaningful connections.
              Let's connect and create a bright future together!
            </div>
            <div className="mt-4 font-semibold">Contact</div>
            <div>vikiade00@gmail.com</div>

            <div className="mt-4 font-semibold">Based In</div>
            <div>Bandung, Jawa Barat, Indonesia</div>

            <div className="mt-4 font-semibold">Follow Us</div>
            <div className="mt-1 flex gap-1">
              <a
                href=""
                target="_blank"
                className="text-blue-600 text-2xl hover:scale-105 hover:text-blue-700"
              >
                <InstagramLogo weight="fill" />
              </a>
              <a
                href=""
                target="_blank"
                className="text-blue-600 text-2xl hover:scale-105 hover:text-blue-700"
              >
                <GithubLogo weight="fill" />
              </a>
              <a
                href=""
                target="_blank"
                className="text-blue-600 text-2xl hover:scale-105 hover:text-blue-700"
              >
                <LinkedinLogo weight="fill" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
