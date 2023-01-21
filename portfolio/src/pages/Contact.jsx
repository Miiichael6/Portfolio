import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Contact.module.css";
import emailjs from "@emailjs/browser";

const initialState = {
  email: "",
  mensaje: "",
};

const Contact = () => {
  const [limitText, setLimitText] = useState(250);
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({
    msg: "",
    successMsg: "",
  });

  const handleSubmit = (e) => {
    const EmailFromMichael = "cdlsmichael.16@gmail.com";
    e.preventDefault();

    const noEmty = Object.values(form).map((value) => value.trim());

    if (noEmty.includes("")) {
      setErrors({
        ...errors,
        msg: "ningun Campo debe quedar vacio",
      });
      setTimeout(() => setErrors({ ...errors, msg: "" }), 5000);
      return;
    }

    const credentials = [
      "service_pg9lgqk",
      "template_aov76gg",
      e.target,
      "UPnzqVqP0HfC1t79u",
    ];
    emailjs
      .sendForm(...credentials)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error) {
          setErrors({
            ...errors,
            msg: "Lo sentimos ocurrió un error inesperado, intentalo mas tarde",
          });
          setTimeout(() => {
            setErrors({
              ...errors,
              msg: "",
            });
          }, 5000);
        }
      });

    setErrors({
      ...errors,
      successMsg: "email enviado con éxito :)",
    });

    setTimeout(() => {
      setErrors({ ...errors, successMsg: "" });
    }, 5000);

    setForm(initialState);
    setLimitText(250);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setForm({
      ...form,
      [name]: value,
    });

    if (name === "mensaje") {
      setLimitText(250 - value.length);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "-100vh",
      }}
      animate={{
        opacity: 1,
        y: "0vh",
      }}
      // exit={{ opacity: 0 }}
      exit={{
        opacity: 0,
        y: "110vh",
      }}
      transition={{ duration: 0.4 }}
      className={`relative min-h-screen w-full overflow-auto mt-8 sm:mt-0 p-5 ${styles.scrollbar}`}
    >
      <div className="flex justify-center min-h-screen items-center">
        <div className="p-3 sm:p-9 w-full sm:w-2/3 md:w-3/6 lg:w-4/12">
          <h1 className="my-6 text-3xl sm:text-5xl font-bold text-center">
            ¿Quieres contactarme?
            <span className="block hover:scale-150 transition-transform">
              ¡Genial! 🥳
            </span>
          </h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col py-10 px-6 bg-form rounded-sm">
              <div className="mb-5 relative">
                <input
                  id="email"
                  placeholder="Tu Email Aquí"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-2 py-0 outline-none bg-transparent border-b-rose-50 border-b-2 pb-0.5 ${styles.input_form} hover:scale-110 transition-transform sm:focus:scale-110`}
                  autoComplete="off"
                />
              </div>
              <div className="mb-2">
                <textarea
                  name="mensaje"
                  placeholder="Tu mensaje Aquí"
                  cols="30"
                  onChange={handleChange}
                  rows="8"
                  value={form.mensaje}
                  maxLength={250}
                  className={`p-2 outline-none rounded-sm w-full border bg-transparent resize-none hover:scale-110 transition-transform focus:scale-110 overflow-y-auto ${styles.scrollbar}`}
                ></textarea>
              </div>
              <div className="flex justify-end">
                <p className="text-sm text-gray-400">{limitText} caracteres</p>
              </div>
              <div className="flex justify-center">
                <input
                  type="submit"
                  value="enviar"
                  className="py-1 px-2 border rounded-md hover:bg-white transition-all hover:text-black hover:font-bold hover:cursor-pointer"
                />
              </div>
              <div className={`${errors.msg ? "block mt-3" : "hidden"}`}>
                <p className="text-center text-red-600 text-sm">{errors.msg}</p>
              </div>
              <div className={`${errors.successMsg ? "block mt-3" : "hidden"}`}>
                <p className="text-center text-green-600 text-sm">
                  {errors.successMsg}
                </p>
              </div>
            </div>
          </form>

          <div className="mt-5 text-center">
            <p>
              tu mensaje será enviado a: <br />
              <span className="underline text-teal-800 text-xl">
                cdlsmichael.16@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

// service ID => service_pg9lgqk
