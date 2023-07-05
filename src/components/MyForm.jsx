import React from "react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { MyInput } from "./MyInput";

/**
 * A basic formik form
 * @returns {JSX.Element}
 * @constructor
 * @see https://formik.org/docs/tutorial
 **/
export const MyForm = () => {
    
    const isNotEmpty = (value) => value != "";

    return (
        <div className="my-form">
            <h1>
                Basic Formik Demo
            </h1>

            <Formik
                initialValues={{ email: "" }}
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email()
                        .required("Required")
                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email" style={{ display: "block" }}>
                                Email
                            </label>
                            <Field
                                name='email'
                                component={MyInput}
                                onChange={handleChange}
                                value={values.email}
                            />

                            {
                                (isNotEmpty(props.values.email)) &&
                                <>
                                    <button
                                        type="button"
                                        className="outline"
                                        onClick={handleReset}
                                        disabled={!dirty || isSubmitting}
                                    >Reset</button>
                                </>}

                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    );
                }}
            </Formik>
        </div>
    )
};