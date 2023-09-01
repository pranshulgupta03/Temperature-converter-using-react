import React, { useState } from 'react'

const Forms = () => {

    const [Data, setData] = useState({
        Name: "",
        LastName: "",
        Email: "",
        Mobile: ""
    });

    const HandleChange = (e) => {
        const {name, value} = e.target;
        setData((prevdata) => ({
          ...prevdata,
          [name]: value,
        }));
    };
    const HandleSubmit = (e) => {
      e.preventDefault();  
      console.log(Data)
    }


  return (
    <div>
    <form>
      <div><label>Name : </label>
      <input type="text" name="Name" onChange={HandleChange} value={Data.Name} /> </div>
      <div><label>LastName : </label>
      <input type="text" name="LastName" onChange={HandleChange} value={Data.LastName} /> </div>
      <div><label>Email : </label>
      <input type="text" name="Email" onChange={HandleChange} value={Data.Email} /> </div>
      <div><label>Mob : </label>
      <input type="text" name="Mobile" onChange={HandleChange} value={Data.Mobile} /> </div>
      <button onClick={HandleSubmit} >Submit</button>
    </form>
    </div>
  )
}

export default Forms
