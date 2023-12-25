import React from "react";
import { Link } from 'react-router-dom';
import citylogo from '../../Resources/images/logos/manchester_city_logo.png'
import { toast } from 'react-toastify';
import { FormHelperText } from '@mui/material'

export const Citylogo = (props)=>{

const template = <div
 className="img_cover"
        style={{
            width: props.width,
            height: props.height,
            background:`url(${citylogo}) no-repeat`}}></div>
 


   if(props.Link){
        return(
            <Link  className="link_logo" to={props.linkTo}  >
                 {template}
            </Link>
        )
    }else{
        return(
            template
        )
    }
}
export const Showsuccese = (mesg)=>{
toast.success(mesg,{
        position: toast.POSITION.TOP_LEFT
    })
}
export const Tag = (props) => {
    const template = <div
        style={{
            background: props.bck ? props.bck : '#ffffff',
            fontSize: props.size ? props.size : '15px',
            color: props.color ? props.color : '#000000',
            padding: '5px 10px',
            display: 'inline-block',
            fontFamily: 'Righteous',
            ...props.add
        }}
    >
        {props.children}
    </div>;

    if(props.link){
        return(
            <Link to={props.linkTo}>
                {template}
            </Link>
        ) 
    }else{
        return template
    }

}
export const textErrorHelper = (formik,values) => ({
    error:formik.errors[values] && formik.touched[values],
    helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values]:null
})

export const selectErrorHelper = (formik,values) => {
    if(formik.errors[values] && formik.touched[values]){
        return (<FormHelperText>{formik.errors[values]}</FormHelperText>)
    }
    return false;
}

export const  selectIsError = (formik,values) => {
    return formik.errors[values] && formik.touched[values];
}