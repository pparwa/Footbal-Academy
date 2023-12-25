import React,{useState} from "react";
import { CircularProgress } from "@mui/material";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Showsuccese } from "../Utils/Citylogo";
const Signin = (props)=>{

let [load,setload] = useState(false)
const formik = useFormik({
    initialValues:{
        email:"",
        password:"",
    },
    validationSchema:Yup.object(
        {
            email:Yup.string().email('Invalid email addres').required('The email addres is requeired'),
            password:Yup.string().required('The email is required'),
          
        }
    ),
    onSubmit:(values)=>{
        setload(true)
        /*submitForm(values)*/
    
    }
})
 /*const submitForm = (values) => {
        /*firebase.authDomain()
        .signInWithEmailAndPassword(
            values.email,
            values.password
        ).then(()=>{
            // show success toast
            props.history.push('/dashboard');
        }).catch(error=>{
            setload(false);
            alert(error)
            /// show toasts
        })
    }*/
let show = ()=>{
    Showsuccese('succcesful login')
    props.history.push('/dashboard');
    
}
return(
    <>
    <div className="container">
            <div className="signin_wrapper" style={{margin:'100px'}}>


      <form onSubmit={formik.handleSubmit}> 
       <h2>Please login</h2>
       <input
       name="email"
       type="email"
       onBlur={formik.handleBlur}
       onChange={formik.handleChange}
       value={formik.values.email}
       />
       {formik.touched.email && formik.errors.email?
        <div className="error_label">
                            {formik.errors.email}
                        </div>:null}
       <input
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
    {formik.touched.password && formik.errors.password?
        <div className="error_label">
                            {formik.errors.email}
                        </div>:null}
                        {load?<CircularProgress />:
                        <button type="submit" onClick={show}>Log in</button>}
                        
      </form>








    </div>
        </div>
    </>
)

}
export default Signin;