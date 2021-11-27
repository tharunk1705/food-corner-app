import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    alert(`Hi ${name}. Thanks for contacting us. We'll react out to you soon.`);
    navigate("/");
  };
  return (
    <div className="flex flex-row contact">
      <div className="contactRightSide">
        <h1 className="text-5xl text-white font-bold md:text-center">
          Contact Us
        </h1>
        <hr className="my-4" />
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="input">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input className="input" type="email" name="email" />
          </div>
          <div className="input">
            <label className="label" htmlFor="message">
              Message
            </label>
            <textarea className="input" name="message" />
          </div>
          <button className="sendButton" type="submit">
            Send!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
