import React from 'react'
import View from '../components/Layout/View'
import { useForm } from "react-hook-form";
export default function Contact() {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <View>
            <div className='title'>
                <h1>Get In Touch</h1>
                <p></p>
                <p>Looking forward to hearing from you</p>
            </div>
            <div className='contact-frame'>
                <div className='left'>
                    <h2>Based In</h2>
                    <p>Fort Collins, CO (US)</p>
                    <h2>Email</h2>
                    <p>ollyhite8520@gmail.com</p>
                    <h2>Phone</h2>
                    <p>(123) 234-7777</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Name</p>
                    <input {...register("name", { required: true })} />
                    <p className='error'>{errors.name?.type === 'required' && "Name is required"}</p>
                    
                    {/* <input {...register("lastName", { required: true })} />
                    {errors.lastName && <p>Last name is required</p>} */}
                    <p>Email</p>
                    <input {...register("mail", { required: "Email Address is required" })} />
                    <p className='error'>{errors.mail?.message}</p>

                    <p>Message</p>
                    <input {...register("message", { required: "Message is required" })} />
                    <p className='error'>{errors.message?.message}</p>

                    <input className='submit-btn' type="submit" />
                </form>
            {/* <p>2022 By Pei-Yun Hite</p> */}
            </div>
        </View>
    )
}