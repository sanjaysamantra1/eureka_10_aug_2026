import React from 'react'

export default function CategoryItem({category}) {
  return <div className='col text-center'>
    <img src={category.img_url} alt="" />
    <div>{category.label}</div>
  </div>
}
