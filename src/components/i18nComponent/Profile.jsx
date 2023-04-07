import React from 'react'
import { useTranslation } from 'react-i18next'

function Profile() {
    const {t} = useTranslation("profile")
  return (
    <div className='container mt-5 col-9 col-md-6'>
        <h1 className='text-center'>{t("profile")}</h1>
        <div className="form-group">
            <label htmlFor="name">{t("name")}</label>
            <input type="text" className='form-control' placeholder='Enter Name' />
        </div>
        <div className="form-group">
            <label htmlFor="age">{t("age")}</label>
            <input type="text" className='form-control' placeholder='Enter Age' />
        </div>
        <div className="form-group">
            <label htmlFor="email">{t("email")}</label>
            <input type="text" className='form-control' placeholder='email@example.com' />
        </div>
        <br />
        <div className="text-center">
            <button className='btn btn-dark form-control'>SAVE</button>
        </div>
    </div>
  )
}

export default Profile