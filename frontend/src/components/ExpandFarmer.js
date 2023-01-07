import React, {useState, useEffect} from 'react'
import './ExpandFarmer.css';
import axios from 'axios';
import { useParams, NavLink, useNavigate } from 'react-router-dom';


export const Expand = ({ url }) => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setuser] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:4000/api/famerEmp/expand/${id}`)
    .then(res=>{
      setuser(res.data);
    })
    .catch(err=>{ console.log(err) });
  });
  


    const deletehandler = (id)=>{
      axios.delete(`http://localhost:4000/api/famerEmp/delete/${id}`)
        .then()
        .catch(err=>console.log(err));

        navigate('/');
    };

  return (
    <div className='expand'>
      <div className='darkmode'>
      <div className="linesbackground"></div>
        <div className="expandbox">
            <div className="expandleft">
            <img className=' rubber expandimg' src={`/images/${user.avatar}.png`} alt="nil" />
            <p className=' rubber expandusername'>{user.username}</p>
            <div className="expandagegender">
              <div className="expandage">
                <p className=' rubber expandage1'>Age <span className='expandage1span'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</span></p>
                <p className='rubber expandage2'>{user.age}</p>
              </div>
              <div className="expandgender">
                <p className='rubber expandgender1'>Gender <span className='expandgender1span'>&nbsp; :</span></p>
                <p className='rubber expandgender2'>{user.gender}</p>
              </div>
            </div>
          </div>
          <div className="expandright">
            <div className="expandrightup">
              <div className="expandemail">
                <p className="shake expandemail1">Email</p>
                <p className='expandemail2'>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {user.email}</p>
              </div>
              <div className="expandpass">
                <p className=" shake expandpass1">Password</p>
                <p className=' expandpass2'>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {user.password}</p>
              </div>
              <div className="expandnum">
                <p className="shake expandnum1">Contact</p>
                <p className='expandnum2'>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {user.phone}</p>
              </div>
            </div>
            <div className="expandrightdown">
              <p className="expandabout1">About : </p>
              <p className='expandabout2'>{user.about}</p>
            </div>
            <div className="expandbtns">
                <NavLink className='expandeditbtn' to={`/farmeredit/${user._id}`}> <div className='heart'><i className="fa-solid fa-pen-to-square"></i> &nbsp; EDIT</div></NavLink>
                <button className=' expanddelbtn' onClick={()=>{ deletehandler(user._id) }}> <div className='heart'><i className="fa-solid fa-trash"></i> &nbsp; DELETE</div></button>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}


export default Expand