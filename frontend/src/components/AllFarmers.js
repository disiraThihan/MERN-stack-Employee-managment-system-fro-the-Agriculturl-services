import React, {useState, useEffect} from 'react'
import './AllFarmers.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';



export const All = ({ url }) => {
  //Mousetrailer(url);
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/famerEmp/all')
      .then(res=>{ 
        setusers(res.data);
      })
      .catch(err=>{ console.log(err) });
  }, [users]);

  const deletehandler = (id)=>{
    axios.delete(`http://localhost:4000/api/famerEmp/delete/${id}`)
      .then()
      .catch(err=>console.log(err));
  };


  return (
    <div className='all'>
      <canvas className='canvas canvas1'></canvas>
      <div className="allbox">
          {
            users.map(a=>{
              return(
                <div key={a._id} className='allcardbox' style={ {backgroundColor: `${a.color}`} } >
                  <div className="allcard">
                    <img className='allcardimg' src={`images/${a.avatar}.png`} alt="nil" />
                    <NavLink className='allexpand' to={`/farmerexpand/${a._id}`}><i className="fa-solid fa-expand"></i></NavLink>
                    <p className=' rubber allusername'>{a.username}</p>
                    <div className="agegenderbox">
                      <div className="gender">
                        <p style={ {color:`${a.color}`, fontWeight:'500'} }>Gender</p>
                        <p className=' rubber size15'>{a.gender}</p>
                      </div>
                      <div className="age">
                        <p style={ {color:`${a.color}`, fontWeight:'500'} }>Age</p>
                        <p className=' rubber size15'>{a.age}</p>
                      </div>
                    </div>
                    <p className=' shake allemail'><i className="fa-solid fa-envelope" style={ {color:`${a.color}`} }></i>{a.email}</p>
                    <p className=' shake allphone'><i className="fa-solid fa-phone" style={ {color:`${a.color}`} }></i>{a.phone}</p>
                    <div className="allcardbtns">
                        <NavLink className='editbtn' to={`/farmeredit/${a._id}`}><i className="fa-solid fa-pen-to-square" style={ {color:`${a.color}`} }></i></NavLink>
                        <button className='removebtn' onClick={()=>{ deletehandler(a._id) }}><i className="fa-solid fa-trash" style={ {color:`${a.color}`} }></i></button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default All
