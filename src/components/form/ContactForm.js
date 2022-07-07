import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { send } from 'emailjs-com';

export default function ContactForm() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [toSend, setToSend] = useState({
    name: '',
    to_name: '',
    message: '',
    reply_to: 'ollyhite8520@gmail.com',
  });
    const onSubmit = (data) => {
        console.log(data)
        setToSend({name:data.name,message:data.message,to_name:data.email})
        console.log("toSend",toSend);
        send(
            // 'SERVICE ID',
            'service_29ty1ob',
            // 'TEMPLATE ID',
            'template_p9f84lh',
            // toSend,
            data,
            // 'User ID'
            'LJjH6dlIaJVTm8hW-'
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Name</p>
                    <input {...register("name", { required: true, })}  />
                    {errors.name && <p className='error'>Name is required</p>}
                    <p>Email</p>
                    <input {...register("mail", { required: "Email Address is required" })} />
                    {errors.mail && <p className='error'>Name is required</p>}

                    <p>Message</p>
                    <textarea {...register("message", { required: "Message is required" })} />
                    {errors.message && <p className='error'>Name is required</p>}
                    <input className='submit-btn' type="submit" />
        </form>
    )
}
