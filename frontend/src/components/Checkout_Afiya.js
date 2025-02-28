import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container mt-4">
      <h2 className="text-center mb-4">Checkout</h2>
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
          <Form className="card p-4 shadow-sm">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <Field name="name" type="text" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <Field name="email" type="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address:</label>
              <Field name="address" as="textarea" className="form-control" rows="3" />
              <ErrorMessage name="address" component="div" className="text-danger" />
            </div>

            <button type="submit" className="btn btn-success w-100" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Place Order"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Checkout;
