import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import backgroundImg from "../assets/images/background.webp";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleForm(e) {
    e.preventDefault();

    // Validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("All fields are required!", {
        style: { backgroundColor: "#303030", color: "#fff" },
      });
      return;
    }

    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/rbedse81@gmail.com", {
        name: name.trim(),
        message: message.trim(),
        email: email.trim(),
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Message Sent Successfully!", {
            style: { backgroundColor: "#303030", color: "#fff" },
          });
          setName("");
          setEmail("");
          setMessage("");
        } else {
          throw new Error("Unexpected response");
        }
      })
      .catch((error) => {
        const errorMsg =
          error.response?.data?.error || "Unable to send the message.";
        toast.error(errorMsg, {
          style: { backgroundColor: "#303030", color: "#fff" },
        });
      });
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
      <h1
        id="contact"
        className="mb-8 font-extrabold text-center text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#d7d7d7] to-[#616161]"
      >
        Contact Me
      </h1>
      <section
        className="w-5/6 rounded-xl mx-auto bg-fit"
        style={{ backgroundImage: `url(${backgroundImg.src})` }}
      >
        <div className="sm:p-24 p-8 mx-auto mb-24">
          <div className="pb-8 text-center">
            <h1 className="text-primary sm:text-5xl text-3xl font-bold">
              Love to hear from you,
            </h1>
            <h1 className="text-primary sm:text-5xl text-3xl font-bold">
              Get in touch 👋
            </h1>
          </div>
          <form
            id="form"
            className="xl:px-24 sm:px-0"
            onSubmit={handleForm}
          >
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4 w-full justify-center">
              <div>
                <label className="text-primary font-semibold">
                  Your Name
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full text-black rounded-md h-10 px-2"
                    type="text"
                    name="name"
                    id="name"
                  />
                </label>
              </div>
              <div>
                <label className="text-primary font-semibold">
                  Email Address
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full text-black rounded-md h-10 px-2"
                    type="email"
                    name="email"
                    id="email"
                  />
                </label>
              </div>
            </div>
            <div className="py-4">
              <label className="text-primary font-semibold">
                Message
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-black rounded-md h-28 p-2"
                  name="message"
                  id="message"
                  required
                ></textarea>
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-white font-bold hover:bg-gray-200"
              >
                Submit :)
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
