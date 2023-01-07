import React, { useEffect, useState ,useRef} from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import Box from '@mui/material/Box';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import "./printFamEmp.css";

import {useReactToPrint} from 'react-to-print';


const Details = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);

    const navigate = useNavigate();


    const getdata = async () => {

        const res = await fetch(`http://localhost:4000/api/farmerEmployee/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`http://localhost:4000/api/farmerEmployee/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            navigate.push("/farmerEmployeehome");
        }

    }

   
const componentRef = useRef();
const handelPrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data',
    onAfterPrint: ()=>alert('Print Success')
})

    return (
        <div className="con2" >
            {/* <h1 style={{ fontWeight: 400 }}>About Employee</h1> */}
            <Box className='boxFam1'>
                        <h3>About Employee</h3>
            

            <div className="add_btn">
                        <NavLink to={`/farmerEmployeeedit/${getuserdata._id}`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                        <button className="btn btn-danger" onClick={() => deleteuser(getuserdata._id)}><DeleteOutlineIcon /></button>
                        <button className="btn btn-primary mx-2" onClick={handelPrint}><WorkIcon /></button>
            </div>
            </Box>

            <Card sx={{ maxWidth: 1200 }} className="cardFamEmp">
                <CardContent>
                    
                    <div className="row" ref={componentRef}>
                    <Box className='boxFam'>
                        <h3>Employee personal detail report</h3>
                    </Box>
                        <div className='borders'>

                        <div className='profileFAmic' alt="profile" />
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            
                            <h3 className="mt-3">Name: <span >{getuserdata.name}</span></h3>
                            <h3 className="mt-3">Age: <span >{getuserdata.age}</span></h3>
                            <p className="mt-3"><MailOutlineIcon />Email: <span>{getuserdata.email}</span></p>
                            <p className="mt-3"><WorkIcon />Occuption: <span>{getuserdata.work}</span></p>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">

                            <p className="mt-5"><PhoneAndroidIcon />mobile: <span>+91 {getuserdata.mobile}</span></p>
                            <p className="mt-3"><LocationOnIcon />location: <span>{getuserdata.add}</span></p>
                            <p className="mt-3">Description: <span>{getuserdata.desc}</span></p>
                        </div>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Details
