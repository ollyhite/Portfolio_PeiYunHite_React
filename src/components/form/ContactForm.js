import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { send } from 'emailjs-com';

export default function ContactForm(props) {
    console.log(props);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [toSend, setToSend] = useState({
    name: '',
    message: '',
    reply_to: '',
  });
    const onSubmit = async (data,e) => {
        console.log(data)
        setToSend({name:data.name,message:data.message,reply_to:data.email})
        console.log("toSend",toSend);
        await send(
            // 'SERVICE ID',
            'service_29ty1ob',
            'TEMPLATE ID',
            // 'template_p9f84lh',
            // toSend,
            data,
            // 'User ID'
            'LJjH6dlIaJVTm8hW-'
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                props.openMsgMadolFunc(true)
                props.checkIsErrorFunc(false)
                //empty input field after each submit
                e.target.reset();
            })
            .catch((err) => {
                props.openMsgMadolFunc(true)
                props.checkIsErrorFunc(true)
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
