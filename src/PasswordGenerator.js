import React, { useState } from 'react'

function PasswordGenerator() {
    const[pass,setPass] = useState();
    const val1 = ['A@a','g@B','vC@','d@D','Ee@','G2@','Z2@','Yw@','@Zi','Vn@','A@a','g@B','vC@','d@D','Ee@','G2@','Z2@','Yw@','@Zi']
    const [flag,setFlag] = useState(0);
    const [v1,setv1] =useState(0);
    // var v1 ;
    const Gen_pass = () => {
        setFlag(flag+1)
        
        for(let i=0;i<=9;i++){
            let ram_val =  Math.random(i);
            //  v1 = ram_val.toFixed(3)*1000;
             setv1(ram_val.toFixed(3)*1000)
            console.log(v1);
        }
        document.getElementById('pass_container').style.display='block'
    }

    const copy_password = () => {
        const copy =document.getElementById('pass_container').innerText;
        alert("password is copy : "+copy);
    }

  return (
    <div>
        <button onClick={Gen_pass}>Generate Password</button>
        <span id="pass_container" hidden>{v1}{val1[flag]}</span>
        <button className='copy_password' onClick={copy_password}>copy password</button>
    </div>
  )
}

export default PasswordGenerator