import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';

function Form() {
  const [state, handleSubmit, reset] = useForm('mrbwlepw');
  const [errors, setErrors] = useState({});
  const [messageSent, setMessageSent] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const regex = /\S+@\S+\.\S+/;

  function formValidate(formData) {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!regex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    }

    return newErrors;
  }

  function handleForm(e) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const newErrors = formValidate(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleSubmit(e); // send to Formspree
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      setShowForm(false);
      setMessageSent(true);

      const timer = setTimeout(() => {
        setMessageSent(false);
        setShowForm(true);

        reset();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <>
      {messageSent && (
        <div className="text-[#1a1a1a] dark:text-[#f1f5f9] text-center w-full xl:w-1/2 grid place-content-center">
          Message sent! Thank you 😊
        </div>
      )}

      {showForm && (
        <form
          onSubmit={handleForm}
          action="https://formspree.io/f/mrbwlepw"
          className="flex flex-col gap-10 w-full xl:w-1/2 rounded-xl bg-white border border-slate-200 dark:border-0 dark:bg-[#1e293b] shadow-lg p-5 md:p-10"
          method="post"
        >
          <aside className="flex flex-col gap-3">
            <label
              htmlFor="name"
              className="text-sm font-bold text-slate-800 dark:text-[#e2e8f0]"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              className="bg-slate-50 dark:bg-[#0f1720] text-slate-800 dark:text-[#f1f5f9] outline-0 p-4 rounded-sm border dark:border-[#475569] placeholder:text-slate-500 dark:placeholder:text-[#94a3b8]"
            />
            {errors.name && (
              <p className="text-red-600 text-sm">{errors.name}</p>
            )}
          </aside>

          <aside className="flex flex-col gap-3">
            <label
              htmlFor="email"
              className="text-sm font-bold text-slate-800 dark:text-[#e2e8f0]"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="bg-slate-50 dark:bg-[#0f1720] text-slate-800 dark:text-[#f1f5f9] outline-0 p-4 rounded-sm border dark:border-[#475569] placeholder:text-slate-500 dark:placeholder:text-[#94a3b8]"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </aside>

          <aside className="flex flex-col gap-3">
            <label
              htmlFor="message"
              className="text-sm font-bold text-slate-800 dark:text-[#e2e8f0]"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="8"
              placeholder="Enter Your Message"
              className="bg-slate-50 dark:bg-[#0f1720] text-slate-800 dark:text-[#f1f5f9] outline-0 p-4 rounded-sm resize-none border border-[#475569] dark:border-[#60a5fa] placeholder:text-slate-500 dark:placeholder:text-[#94a3b8]"
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm">{errors.message}</p>
            )}
          </aside>
          <button
            disabled={state.submitting}
            className="bg-blue-600 dark:bg-linear-to-br dark:from-[#60a5fa] dark:to-[#3b82f6] shadow-lg shadow-blue-500/30 hover:from-[#93c5fd] hover:to-[#60a5fa] hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 text-center w-full md:w-[150px] p-4 text-base md:text-lg rounded text-white uppercase font-semibold hover:opacity-80 cursor-pointer"
          >
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </>
  );
}

export default Form;
