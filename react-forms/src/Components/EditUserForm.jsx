import React from 'react';
import {useForm} from 'react-hook-form'

const EditUserForm = (props) => {
    
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: props.currentUser
    });
    
    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data, e) => { 
        //console.log(data)
        props.updateUser(props.currentUser.id, data);
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
            
            <br />
            <button type="submit">Edit user</button>
            <button>Cancel</button>
        </form>
    );
}
 
export default EditUserForm;