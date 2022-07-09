import React from 'react'
import { AiFillCheckCircle } from "react-icons/ai";
import { MdError } from "react-icons/md";

export default function MsgModal({isError,open,openMsgMadolFunc}) 
{   
    return (
        <>
        {open && 
        /* // <div className='msg-frame'> */
        <div className={["msg-frame", open ? "show" : ""].join(" ")}>
            {isError?(
                <div className={["info", open ? "show" : ""].join(" ")}>
                    <MdError className='icon'/>
                    <h3>Sorry, your information send failed,</h3>
                    <h3>please try later!!!</h3>
                    <button onClick={()=>{
                        console.log("cleck");
                        openMsgMadolFunc(false)}}>Close</button>
                </div>
            )
            :(
                <div className={["info", open ? "show" : ""].join(" ")}>
                    <AiFillCheckCircle className='icon'/>
                    <h2>Got your information!!!</h2>
                    <h3> {"I will reply you ASAP:)"}</h3>
                    <button onClick={()=>{
                        console.log("cleck");
                        openMsgMadolFunc(false)}}>Close</button>
                </div>
            )}
        </div>
        }
        </>
    )
}
