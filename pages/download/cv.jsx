import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Layout from "../../components/layout";
import API from "../../api/index";
import { useRouter } from "next/router";

function Cv() {
  const [link, setLink] = useState("");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  return (
    <Layout>
      <div className="flex flex-col gap-10 justify-center items-center h-screen text-blanco px-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Download My Cv</h1>
          <p>
            Please enter your email and explain why you want to see my Cv <br />{" "}
            (you can also pass the explanation)
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <div
              className="inline-block w-8 h-8 bg-current rounded-full animate-ping"
              role="status"
            >
              <span className=""></span>
            </div>
            <div className="absolute">Loading</div>
          </div>
        ) : (
          <Formik
            initialValues={{
              email: "",
              usage: "",
            }}
            onSubmit={(data, { setSubmitting }) => {
              setLoading(true);
              setTimeout(() => {
                API.postEmail(data)
                  .then(() => {
                    API.getCv()
                      .then((res) => {
                        setLink(res.data[0].link);
                        console.log(res.data[0].link);
                        setModal(true);
                      })
                      .catch((err) => console.log(err));
                  })
                  .catch((err) => console.log(err));
                setSubmitting(false);
              }, 1500);
            }}
          >
            <Form className="flex flex-col gap-5 items-center justify-center max-w-2xl w-full">
              <Field
                placeHolder="Put your Email here"
                className="max-w-lg w-full p-2 bg-rellenos rounded"
                name="email"
                type="email"
              />
              <Field
                placeHolder="Why you need my Cv?"
                className="max-w-lg w-full p-2 bg-rellenos rounded"
                name="usage"
                as="textarea"
              />
              <button
                type="submit"
                className="bg-primario w-36 h-12 rounded hover:opacity-80 transition flex justify-center items-center"
              >
                Submit
              </button>
            </Form>
          </Formik>
        )}
      </div>
      {modal ? (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/60 flex justify-center items-center p-5">
          <div className="bg-rellenos border border-bordes rounded w-full max-w-lg h-48 flex flex-col text-center gap-5 p-10 justify-center items-center text-blanco">
            <h3>Thank you for submit your email, you can see my Cv here</h3>
            <div className="flex gap-5">
              <a
                className="border w-36 h-12 rounded hover:opacity-80 transition flex items-center justify-center gap-2"
                target="_blank"
                href={link}
                rel="noreferrer"
              >
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.5 15C0.5 14.4477 0.947715 14 1.5 14H13.5C14.0523 14 14.5 14.4477 14.5 15C14.5 15.5523 14.0523 16 13.5 16H1.5C0.947715 16 0.5 15.5523 0.5 15ZM3.79289 7.29289C4.18342 6.90237 4.81658 6.90237 5.20711 7.29289L6.5 8.58579L6.5 1C6.5 0.447716 6.94771 2.41411e-08 7.5 0C8.05228 -2.41411e-08 8.5 0.447715 8.5 1L8.5 8.58579L9.79289 7.29289C10.1834 6.90237 10.8166 6.90237 11.2071 7.29289C11.5976 7.68342 11.5976 8.31658 11.2071 8.70711L8.20711 11.7071C8.01957 11.8946 7.76522 12 7.5 12C7.23478 12 6.98043 11.8946 6.79289 11.7071L3.79289 8.70711C3.40237 8.31658 3.40237 7.68342 3.79289 7.29289Z"
                    fill="white"
                  />
                </svg>
                Download CV
              </a>

              <button
                onClick={() => {
                  router.back();
                  setLink("");
                  setModal(false);
                }}
                className="bg-primario w-36 h-12 rounded hover:opacity-80 transition flex justify-center items-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
}

export default Cv;
