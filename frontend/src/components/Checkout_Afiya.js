import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, clearCart }) => {
  const navigate = useNavigate();

  // Redirect if cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Must be at least 3 characters").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    address: Yup.string().min(10, "Must be at least 10 characters").required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", address: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          clearCart();
          navigate("/confirmation");
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="checkout-form">
          <h2>Checkout</h2>

          <label htmlFor="name">Name:</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className="error" />

          <label htmlFor="email">Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" className="error" />

          <label htmlFor="address">Address:</label>
          <Field name="address" as="textarea" />
          <ErrorMessage name="address" component="div" className="error" />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Place Order"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Checkout;
