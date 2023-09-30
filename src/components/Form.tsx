import react, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {

  const urlsearchparams: any = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlsearchparams.entries());
  let item: string = "an item";
  console.log(params);
  if (Object.keys(params).length == 1) {
    item = params['item'];
  }

  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9vyeoym",
        "template_45rjumg",
        form.current,
        "2GuZPLvQ3ROla7NzI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="border-black border rounded-sm flex flex-col p-6 w-full md:w-3/5 gap-4"
    >
      <div>
        <label htmlFor="from_name">Full Name</label>
        <br />
        <input
          className="border-black border rounded-sm w-full p-1"
          name="from_name"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input className="border-black border rounded-sm w-full p-1" name="email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          className="border-black border rounded-sm w-full p-2"
          name="message"
          defaultValue={`Hello, I'm interested in ${item}.`}
        ></textarea>
      </div>
      <input
        type="submit"
        value="Send"
        className="bg-black text-white p-2 cursor-pointer"
      />
    </form>
  );
}
