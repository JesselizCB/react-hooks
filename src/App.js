
import React, {useState} from 'react'
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const usersData = [
    { id:uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id:uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id:uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = React.useState({id:null, name:'', username:''})
  // Agregar usuarios 
  const addUser = user => {
    user.id = uuidv4()
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    // Note: solo se realiza un filter en el array original
    setUsers(users.filter((user) => user.id !== id))
  }

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id:user.id, 
      name:user.name, 
      username:user.username
    })
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false)
    // recorremos el array useres y si es igual al id pintamos el usuario actualizado else pintamos el user
    setUsers(users.map(user => (user.id===id ? updatedUser : user)))
  }

  

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
        
          
          {editing? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
            </div>
          ):(
            <div>
               <h2>Add user</h2>
               <AddUserForm addUser={addUser}/>
            </div>
          )}
        

        </div>
        <div className="flex-large">
          <h2>View users</h2>
        </div>
        <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
      </div>
    </div>
  )
}

export default App