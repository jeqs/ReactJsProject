import React from 'react';
import {useForm} from 'react-hook-form'

const AddUserForm = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = (data, e) => { 
        //console.log(data)
        props.addUser(data);
        e.target.reset();
    };

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input name="name" className='form-control' {...register("name")} />
            {errors.name && <span>Este campo es requerido</span>}

            <label>Username</label>
            <input name="username" className='form-control' {...register("username", { required: true })} />
            {errors.username && <span>Este campo es requerido</span>}
            
            <button type="submit">Add new user</button>
        </form>
    );
}
 
export default AddUserForm;