import React, { useState } from "react";

const Contact = () => {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Num, setNum] = useState("");
  const [Msg, setMsg] = useState("");
  const nameHandle = (e) => {
    setName(e.target.value);
    console.log(Name)
  };
  const numHandle = (e) => {
    setNum(e.target.value);
    console.log(Num)
  };
  const msgHandle = (e) => {
    setMsg(e.target.value);
    console.log(Msg)
  };
  const mailHandle = (e) => {
    console.log(Email)
    setEmail(e.target.value);
  };
  return (
    <><section className="wrapper   ">
      <div className="top  tracking-normal -mt-10 px-2 ">CONTACT US </div>

      <div className="bottom tracking-normal -mt-10 px-2 " aria-hidden="true">
        CONTACT US
      </div>
    </section><div className="w-full h-full flex flex-wrap">

        <div className="flex flex-wrap text-white text-center justify-center">

          <p className="text-[1.2vw] px-[10vw] p-[3vh] text-center justify-center font-semibold">
            PARAMARSH is what it is today because of the thousands of attendees, participants, and supporters. So Whenver you need us, We're here for you. Whether you have a question about events, participation procedure, or anything else, our team is ready to answer all your questions. Drop us a line!
          </p>
        </div>
        <div className="con flex">
          <div className="w-[50vw] px-[5vw] space-y-3 py-10 sm:w-[100vw] all">
           <form> <input
              type="text"
              placeholder="Name"
              className="outline-none text-white rounded-xl w-full bg-slate-800 px-5 py-3 mb-10"
              onChange={nameHandle}
              required />
            <input
              type="email"
              placeholder="Email"
              className="outline-none text-white rounded-xl w-full bg-slate-800 px-5 py-3 mb-10"
              onChange={mailHandle}
              required />

            <input
              type="text"
              placeholder="Message"
              className="outline-none text-white rounded-xl w-full bg-slate-800 px-5 py-3 mb-10"
              onChange={msgHandle}
              required />
            <button className="text-center  p-2 w-full rounded-xl">
              SUBMIT
            </button></form>
          </div>
    <div>
          <div className="   text-white space-y-3 text-[1.2vw] p-10 flex flex-col m- ">
            <p>Mehul Kanzaria :<a href="tel:+919510387540">+919510387540</a></p>
            <p>Naitil Kaklotar :<a href="tel:+917698839391">+917698839391</a></p>
            <p>EMAIL : <a href="mailto:msu.paramarsh2k23@gmail.com"> msu.paramarsh2k23@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default Contact;