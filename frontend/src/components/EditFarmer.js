import React, {useState, useEffect} from 'react'

import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
    const [data, setdata] = useState({avatar : 'avatar1', username : '', password : '', email : '', gender : 'Male', phone : '', about : '', age: 18});

    useEffect(() => {
      axios.get(`http://localhost:4000/api/famerEmp/edit/${id}`)
        .then(res=>{
          setdata(res.data);
        })
        .catch(err=>{console.log(err)});
    }, []);
    
    const changehandler = (e)=>{
      setdata({ ...data, [e.target.name]:e.target.value});

    };

    const submithandler = (e)=>{
        e.preventDefault();
        axios.post(`http://localhost:4000/api/famerEmp/edit/:id`, data)
            .then()
            .catch(err=>console.log(err));
        
        navigate('/');
    };
  return (
    <div className='add'>
        <div className='darkmode'>
        <div className="formbox">
            <form className='form' onSubmit={submithandler} autoComplete="off">
{/* ------------------------ avatar images ---------------------------------- */}
                <div className="avatarimages">
                    <p className=' rubber chooseavatar'>Choose Avatar </p>
                    <p className='asdf'>asdf</p>
                    <label className='addlabel'>
                        <input className='addinput' type="radio" name="avatar"/>
                        <img className='addimg' src="/images/avatar1.png" alt='nil' onClick={()=>setdata({...data, avatar:'avatar1'})} />
                    </label>
                    <label className='addlabel'>
                        <input className='addinput' type="radio" name="avatar"/>
                        <img className='addimg' src="/images/avatar2.png" alt='nil' onClick={()=>setdata({...data, avatar:'avatar2'})} />
                    </label>
                    <label className='addlabel'>
                        <input className='addinput' type="radio" name="avatar"/>
                        <img className='addimg' src="/images/avatar3.png" alt='nil' onClick={()=>setdata({...data, avatar:'avatar3'})} />
                    </label>
                    <label className='addlabel'>
                        <input className='addinput' type="radio" name="avatar"/>
                        <img className='addimg' src="/images/avatar4.png" alt='nil' onClick={()=>setdata({...data, avatar:'avatar4'})} />
                    </label>
                    <label className='addlabel'>
                        <input className='addinput' type="radio" name="avatar"/>
                        <img className='addimg' src="/images/avatar5.png" alt='nil' onClick={()=>setdata({...data, avatar:'avatar5'})} />
                    </label>
                </div>
{/* ------------------------ left box ---------------------------------- */}
                <div className="addleftbox">
                    <input type="text" name="username" placeholder='Username' value={data.username} onChange={changehandler} /> <br />
                    <input type="password" name="password" placeholder='Password' value={data.password} onChange={changehandler} /> <br />
                    <input type="email" name="email" placeholder='Email' value={data.email} onChange={changehandler}/> <br />
                    <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='123-456-7890' value={data.phone} onChange={changehandler} /> <br />
                </div>
{/* ------------------------ right box ---------------------------------- */}
                <div className="addrightbox">
                    <div className="agegenderflex">
                        <input type="number" name="age" placeholder='Age' value={data.age} onChange={changehandler} />
                        <select className='addselect' name="gender" value={data.gender} onChange={changehandler}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <textarea placeholder='About' name="about" cols="30" rows="5" value={data.about} onChange={changehandler}></textarea> <br />
                </div>
                <button className='submitbutton' type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    EDIT
                </button>
{/* ------------------------ end ---------------------------------- */}
            </form>
        </div>
        </div>
    </div>
)
}
export default Edit