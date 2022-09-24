import React, {useState} from 'react';

function Form() {
    const [name,setName] = useState('name');
    const [email,setEmail] = useState('email');
    const [usn,setUsn]= useState('usn');
    var [num,setNum] = useState('number');
    let [branch,setBranch] = useState('br')

    const handleSubmit =(e) =>{  // event handler to activate submit button
        e.preventDefault();   // to prevent default function like refresh page
        
        console.log("its running")  //to check if its working
        const data = {              //data ....RHS value must be same as value used as variable  ex:const[name,setName]
            name: name,
            email: email,
            usn: usn,
            number:num,
            branch:branch
        }
        console.log(data);
    }
  return(
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder='student'
            onChange={(e) => setName(e.target.value)}
            /><br></br>
            <input type="email" value={email} placeholder='enter email'
            onChange={(f) => setEmail(f.target.value)}></input><br></br>
            <input type="text" value={usn} placeholder='enter usn'
            onChange={(g) => setUsn(g.target.value)}></input><br></br>
            <input type="text" value={num} placeholder='entr number' 
            onChange={(h) => setNum(h.target.value)}></input><br></br>
            <input type="text" value={branch} placeholder='branch'
            onChange={(i) => setBranch(i.target.value)}></input><br></br>
            <button className='but' type='submit'>submit</button>
        </form>
    </div>
  );
}

export default Form