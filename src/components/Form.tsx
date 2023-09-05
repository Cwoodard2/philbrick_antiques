import react, {useRef} from 'react';
import emailjs from '@emailjs/browser';

export default function Form() {
    const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_9vyeoym', 'template_45rjumg', form.current, "2GuZPLvQ3ROla7NzI")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <form ref={form} onSubmit={sendEmail} className="border-black border-2 rounded-md flex flex-col p-6 w-3/5">
            <div>
                <label>
                    Full Name
                </label>
                <br />
                <input className="border-black border rounded-sm w-full" name="from_name"/>
            </div>
            <div>
                <label>
                    Email
                </label>
                <br />
                <input className="border-black border rounded-sm w-full" name="email"/>
            </div>
            <div>
                <label>
                    Message
                </label>
                <br />
                <textarea className="border-black border rounded-sm w-full" name='message'></textarea>
            </div>
            <input type="submit" value="Send" />
        </form>
    );
};