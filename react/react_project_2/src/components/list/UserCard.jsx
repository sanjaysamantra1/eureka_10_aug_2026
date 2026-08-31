import React from 'react'

export default function UserCard({user}) { // props de-structuring
  const {username,name,email,phone,address} = user; // object de-structuring

  return <div className="col-sm-3">
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnyA3strzvjzPQKO0Et48RmUomI-rH0HXNvlJnC1tRRp896CRu2Bm23FQ&s=10" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">{username}</h5>
                        <p className="card-text">{name}</p>
                        <p className="card-text">{email}</p>
                        <p className="card-text">{phone}</p>
                        <p className="card-text">{address.city}</p>
                        <a href="#" className="btn btn-primary">Details</a>
                    </div>
                </div>
    </div>
}
