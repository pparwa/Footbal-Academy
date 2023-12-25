import React, { useEffect,useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {v1 as uuid } from 'uuid';
import { Showsuccese ,textErrorHelper,selectErrorHelper,selectIsError} from "../../../Utils/Citylogo";
import { TextField, Select, MenuItem, FormControl , Button } from '@mui/material'
import AdminLayout from "../Adminlayout";

const defaultValues = {
    date:'',
    local:'',
    resultLocal:'',
    away:'',
    resultAway:'',
    referee:'',
    stadium:'',
    result:'',
    final:''
}
export const AddEditMatches =(props)=>{
    const [formType,setFormType] = useState('');
    const [teams, setTeams] = useState(null);
    const [values,setValues] = useState(defaultValues);
    const [id,setid] = useState('')
    useEffect(()=>{
        (async()=>{
         let res = await fetch("http://localhost:5000/teams")
         let data = await res.json()
        setTeams(data)

        })()
},[teams])
     const formik = useFormik({
        enableReinitialize:true,
        initialValues: values,
        validationSchema: Yup.object({
            date:Yup.string()
            .required('This input is required'),
            local:Yup.string()
            .required('This input is required'),
            resultLocal:Yup.number()
            .required('This input is required')
            .min(0,'The minimum is 0')
            .max(99,'The maximum is 30'),
            away:Yup.string()
            .required('This input is required'),
            resultAway:Yup.number()
            .required('This input is required')
            .min(0,'The minimum is 0')
            .max(10,'The maximum is 30'),
            referee: Yup.string()
            .required('This input is required'),
            stadium: Yup.string()
            .required('This input is required'),
            result: Yup.mixed()
            .required('This input is required')
            .oneOf(['W','D','L','n/a']),
            final: Yup.mixed()
            .required('This input is required')
            .oneOf(['yes','no'])
        }),
        onSubmit:(values)=>{
            // submit form
          SubmitForm(values)
        }
    });

    async function  SubmitForm(values)
    {
        if(formType === 'add'){
         let id = uuid()
         let elem= {...values,id:id}
        fetch("http://localhost:5000/matches",{
            method:"POST",
            body:JSON.stringify(elem),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
    else{
        let id = uuid()
         let elem= {...values,id:id}
         fetch(`http://localhost:5000/matches/${id}`,{
            method:"PUT",
            body:JSON.stringify(elem),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }

    }

    useEffect(()=>{
        const param = props.match.params.matchid
        if(param)
        {
            setid(param)
            setFormType('Edit');
             fetch(`http://localhost:5000/matches?id=${param}`).then(res =>{
                return res.json()
            }).then(data =>{
                setValues({id:data[0].id,date:data[0].date,local:data[0].local,resultAway:data[0].resultAway,away:data[0].away,resultLocal:data[0].resultLocal,
                result:data[0].result,final:data[0].final,stadium:data[0].stadium})

            })
        }else{
            setFormType('add')
            setValues(defaultValues)
        }
    },[])

    const showTeams = ()=>(
        teams?
        teams.map((team)=>(
            <MenuItem value={team.shortName}>
              {team.shortName}
            </MenuItem>
        ))
    :null)
    return(
<>
<AdminLayout title={ formType === 'add' ? 'Add match': 'Edit match' }>
            <div className="editmatch_dialog_wrapper">
                <div>
                    <form onSubmit={formik.handleSubmit}>

                        <div>
                            <h4>Select date</h4>
                            <FormControl>
                                <TextField
                                    id="date"
                                    name="date"
                                    type="date"
                                    variant="outlined"
                                    {...formik.getFieldProps('date')}
                                    {...textErrorHelper(formik,'date')}
                                />
                            </FormControl>
                        </div>

                        <hr/>

                        <div>
                            <h4>Result local</h4>
                            <FormControl error={selectIsError(formik,'local')}>
                                <Select
                                    id="local"
                                    name="local"
                                    variant="outlined"
                                    displayEmpty
                                    {...formik.getFieldProps('local')}
                                >
                                    <MenuItem value="" disabled>Select a team</MenuItem>
                                    {showTeams()}
                                </Select>
                                {selectErrorHelper(formik,'local')}
                            </FormControl>

                            <FormControl
                                style={{marginLeft:'10px'}}
                            >
                                <TextField
                                    id="resultLocal"
                                    name="resultLocal"
                                    type="number"
                                    variant="outlined"
                                    {...formik.getFieldProps('resultLocal')}
                                    {...textErrorHelper(formik,'resultLocal')}
                                />
                            </FormControl>
                        </div>


                        <div>
                            <h4>Result away</h4>
                            <FormControl error={selectIsError(formik,'away')}>
                                <Select
                                    id="away"
                                    name="away"
                                    variant="outlined"
                                    displayEmpty
                                    {...formik.getFieldProps('away')}
                                >
                                    <MenuItem value="" disabled>Select a team</MenuItem>
                                    {showTeams()}
                                </Select>
                                {selectErrorHelper(formik,'away')}
                            </FormControl>

                            <FormControl
                                style={{marginLeft:'10px'}}
                            >
                                <TextField
                                    id="resultAway"
                                    name="resultAway"
                                    type="number"
                                    variant="outlined"
                                    {...formik.getFieldProps('resultAway')}
                                    {...textErrorHelper(formik,'resultAway')}
                                />
                            </FormControl>
                        </div>

                        <hr/>

                        <div>
                            <h4>Match info</h4>
                            <div className="mb-5">
                                <FormControl>
                                    <TextField
                                        id="referee"
                                        name="referee"
                                        variant="outlined"
                                        placeholder="Add the referee name"
                                        {...formik.getFieldProps('referee')}
                                        {...textErrorHelper(formik,'referee')}
                                    />
                                </FormControl>
                            </div>

                            <div className="mb-5">
                                <FormControl>
                                    <TextField
                                        id="stadium"
                                        name="stadium"
                                        variant="outlined"
                                        placeholder="Add the stadium name"
                                        {...formik.getFieldProps('stadium')}
                                        {...textErrorHelper(formik,'stadium')}
                                    />
                                </FormControl>
                            </div>

                            <div className="mb-5">
                                <FormControl error={selectIsError(formik,'result')}>
                                    <Select
                                        id="result"
                                        name="result"
                                        variant="outlined"
                                        displayEmpty
                                        {...formik.getFieldProps('result')}
                                    >
                                        <MenuItem value="" disabled>Select a result</MenuItem>
                                        <MenuItem value="W">Win</MenuItem>
                                        <MenuItem value="D">Draw</MenuItem>
                                        <MenuItem value="L">Lose</MenuItem>
                                        <MenuItem value="n/a">Non available</MenuItem>
                                    </Select>
                                    {selectErrorHelper(formik,'result')}
                                </FormControl>
                            </div>

                            <div className="mb-5">
                                <FormControl error={selectIsError(formik,'final')}>
                                    <Select
                                        id="final"
                                        name="final"
                                        variant="outlined"
                                        displayEmpty
                                        {...formik.getFieldProps('final')}
                                    >
                                        <MenuItem value="" disabled>Was the game played ?</MenuItem>
                                        <MenuItem value="yes">Yes</MenuItem>
                                        <MenuItem value="no">No</MenuItem>
                                    </Select>
                                    {selectErrorHelper(formik,'final')}
                                </FormControl>
                            </div>


                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                               
                            >
                                { formType === 'add' ?
                                    'Add match'
                                :
                                    'Edit match'
                                }
                            </Button>
                           
                        </div>

                    </form>
                </div>
            </div>
        </AdminLayout>
    </>

    )
}