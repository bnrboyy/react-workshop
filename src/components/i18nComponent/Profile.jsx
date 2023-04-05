import React from 'react'

function Profile() {
  return (
    <div className='container mt-5 col-9 col-md-6'>
        <h1 className='text-center'>Profile</h1>
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className='form-control' placeholder='Enter Name' />
        </div>
        <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input type="text" className='form-control' placeholder='Enter Age' />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" className='form-control' placeholder='Enter Email' />
        </div>
        <br />
        <div className="text-center">
            <button className='btn btn-dark form-control'>SAVE</button>
        </div>
    </div>
  )
}

export default Profile