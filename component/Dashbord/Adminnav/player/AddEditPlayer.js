import React,{useEffect, useState} from "react"; 
import AdminLayout from "../Adminlayout";
import { useFormik } from "formik";
import {v1 as uuid } from 'uuid';
import { Showsuccese ,textErrorHelper,selectErrorHelper,selectIsError} from "../../../Utils/Citylogo";
import * as Yup from 'yup';
import player from '../../../../Resources/player_to_upload/raheem_sterling.png'
import { TextField, Select, MenuItem, FormControl , Button } from '@mui/material'
const defaultValues = {
    name:"",
    lastname:"",
    number:"",
    position:"",
    image:""
}
export const AddEditPlayer= (props)=>{
    let [values , setvalues] = useState(defaultValues)
     const [formType,setFormType] = useState('');
     const [loading,setLoading] = useState(false);
     let [id,setid] = useState('');
    // const [update , setupdate] = useState(defaultValues)
    let[pic , setpic] = useState('');
    let[path,setpath] = useState('');
    
    let changepic = (e)=>{
    let file = e.target.files[0];
    console.log(file)
    let src =  URL.createObjectURL(file)
    setpic(src)
    formik.setFieldValue('image',pic)
    }
    let deletpic = ()=>{
        let res = window.confirm('do you want to delet photo?');
    if(res)
        setpic('')
    
        

    }
   
    const formik = useFormik({
        enableReinitialize:true,
        initialValues:values,
        validationSchema:Yup.object({
             name:Yup.string()
            .required('This input is required'),
            lastname:Yup.string()
            .required('This input is required'),
            number:Yup.number()
            .required('This input is required')
            .min('0','The minimum is cero')
            .max('100','The max is 100'),
            position:Yup.string()
            .required('This input is required'),
            image:Yup.string()
            .required('you should put photo')
        }),
        onSubmit:(values)=>{
            
            submitform(values)
        }
    })

async function submitform(values){
    if(formType === "add"){
        let id = uuid()
        let player = {image:"none",...values,id}
        console.log(player)
        setLoading(true)
        fetch(`http://localhost:5000/players`,{
            method:"POST",
            body:JSON.stringify(player),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        Showsuccese('Player added');
         formik.resetForm();
        props.history.push('/admin_players')
        
    
    }else{
        let player = {image:'none',...values}
       let res =await fetch(`http://localhost:5000/players/${id}`,{
        method:"PUT",
                 headers: {
    "Content-type": "application/json; charset=UTF-8"
  },
        body:JSON.stringify(player)
  
       })
         Showsuccese('Player edited');
         formik.resetForm();
        props.history.push('/admin_players')

    }
}
 useEffect(()=>{
        const param = props.match.params.playerid;
        setid(param)
        console.log(typeof(param))
        if(param){
            fetch(`http://localhost:5000/players?id=${param}`).then(res =>{
                return res.json()
            }).then(data =>{
                setvalues({name:data[0].name,position:data[0].position,lastname:data[0].lastname,number:data[0].number,image:data[0].image})
                console.log(values)
                setpath(`../../../../Resources/player_to_upload/${(values.name).toLowerCase()}_${(values.lastname).toLowerCase()}.png`)
                console.log(path)
            })

            setFormType('edit');
            console.log('hello')
        } else {
            setFormType('add');
            setvalues(defaultValues)
        }

    },[props.match.params.playername])

    return(
        <AdminLayout title={formType === 'add'? 'Add player':'Edit player'}>
             <div className="editplayers_dialog_wrapper">
                <div>
                    <form onSubmit={formik.handleSubmit}>

                         <input type="file" onChange={(event)=>changepic(event)} />
                         <img src={formType === "add"?pic:require('../../../../Resources/player_to_upload/raheem_sterling.png')} />
                         {pic?<Button variant="outlined" color="error" onClick={deletpic}>
  Delete
</Button>:null}
                        <hr/>
                        <h4>Player info</h4>
                        <div className="mb-5">
                            <FormControl>
                                <TextField
                                    id="name"
                                    name="name"
                                    variant="outlined"
                                    placeholder="Add firstname"
                                    {...formik.getFieldProps('name')}
                                    {...textErrorHelper(formik,'name')}
                                />
                            
                            </FormControl>
                        </div>

                        <div className="mb-5">
                            <FormControl>
                                <TextField
                                    id="lastname"
                                    name="lastname"
                                    variant="outlined"
                                    placeholder="Add lastname"
                                    {...formik.getFieldProps('lastname')}
                                    {...textErrorHelper(formik,'lastname')}
                                />
                            
                            </FormControl>
                        </div>

                        <div className="mb-5">
                            <FormControl>
                                <TextField
                                type="number"
                                    id="number"
                                    name="number"
                                    variant="outlined"
                                    placeholder="Add number"
                                    {...formik.getFieldProps('number')}
                                    {...textErrorHelper(formik,'number')}
                                />
                            
                            </FormControl>
                        </div>

                        <div className="mb-5">
                            <FormControl error={selectIsError(formik,'position')}>
                                <Select
                                    id="position"
                                    name="position"
                                    variant="outlined"
                                    displayEmpty
                                    {...formik.getFieldProps('position')}
                                >
                                    <MenuItem value="" disabled>Select a position</MenuItem>
                                    <MenuItem value="Keeper">Keeper</MenuItem>
                                    <MenuItem value="Defence">Defence</MenuItem>
                                    <MenuItem value="Midfield">Midfield</MenuItem>
                                    <MenuItem value="Striker">Striker</MenuItem>
                                </Select>
                                {selectErrorHelper(formik,'position')}
                            </FormControl>
                        </div>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={loading}
                            
                        >
                            { formType === 'add' ?
                                'Add player'
                            :
                                'Edit player'
                            }
                        </Button>

                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}