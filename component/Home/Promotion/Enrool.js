import React from "react";
import { useState,useEffect } from "react";
import { CircularProgress, ClickAwayListener } from "@mui/material";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Showsuccese } from "../../Utils/Citylogo";
import { Fade } from "react-awesome-reveal";



export const Enrool = ()=>{
   let [load , setload] = useState(false)
   let [be , setbe] = useState(false)
   const formik = useFormik({
    initialValues:{email:""},
    validationSchema:Yup.object({
        email:Yup.string().email("Invalid email").required("The email is required")
    }),
    onSubmit:(values)=>{
        setload(true)
        submitform()
    }
   })
        useEffect(()=>{
          (async()=>{
          let res =await fetch(` http://localhost:5000/admin?email=${formik.values.email}` ,{
            method:'GET'
          })
          let data = await res.json()
          console.log(data)
        if(data.length > 0)
        {
            setbe(true)
        }

          }
          )()

        },[formik.values.email])
        console.log("click")

let submitform = ()=>
{
    if(be)
    {
        Showsuccese('you are submit')
        setload(false)
       
    }
}


   return(
    <>
     <Fade>
           <div className="enroll_wrapper">
                <form onSubmit={formik.handleSubmit}>
                    <div className="enroll_title">
                        Enter your email
                    </div>
                    <div className="enroll_input">

                        <input
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder="Enter your email"
                        />

                        { formik.touched.email && formik.errors.email ?
                            <div className="error_label">
                                {formik.errors.email}
                            </div>
                        :null}

                        { load ? 
                            <CircularProgress color="secondary" className="progress"/>
                            :
                            <button 
                                type="submit"
                            >
                                Enroll
                            </button>
                        }

                        <div className="enroll_discl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>


                    </div>
                </form>
           </div>
        </Fade>
    </>
   )


}