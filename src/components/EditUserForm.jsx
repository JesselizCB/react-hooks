import React from "react"
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: props.currentUser
  });
  setValue('name', props.currentUser.name)
  setValue('username', props.currentUser.username)
  const onSubmit = (data, e) => {
    console.log(data)
    // limpiar campos
    data.id = props.currentUser.id
    props.updateUser(props.currentUser.id, data)
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
         <button>Edit user</button>
      </div>
    </form>
  );
};

export default EditUserForm;
