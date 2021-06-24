import React from "react"
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {
  //NOTE: antes de la V7
  //const { register, errors, handleSubmit } = useForm();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data, e) => {
    console.log(data)
    // limpiar campos
    props.addUser(data)
    e.target.reset()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        id="name"
        aria-invalid={errors.name ? "true" : "false"}
        {...register('name', { required: true })}
      />
      {errors.name && (
        <span role="alert">
          Name is required
        </span>
      )}

      <label>Username</label>
      <input
        type="text"
        id="username"
        aria-invalid={errors.username ? "true" : "false"}
        {...register('username', { required: true })}
      />
      {errors.username && (
        <span role="alert">
          username is required
        </span>
      )}
      <div>
         <button>Add new user</button>
      </div>
    </form>
  );
};

export default AddUserForm;
