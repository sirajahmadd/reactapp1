import React from 'react'

function Welcome(props) {
    return (
        <div>
            <h3>welcome {props.name} <br/>
            welcome to college  {props.college}<br/>
            your email id is - * {props.email}*<br/>
            your DOB is - *{props.DOB}*
            </h3>
        </div>

    );
}

function Props() {
    return (
        <div>
            <Welcome name="Siraj" college="mitk" email="siraj@123" DOB="2000/07/31"/>
        </div>
    )
}


export default Props