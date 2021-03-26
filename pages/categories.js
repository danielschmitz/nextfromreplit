
import React, { useEffect, useState } from 'react';
import ListCategories from '../components/categories/list'
import EditCategory from '../components/categories/edit'
import HeaderCategories from '../components/categories/header'
import Page from "../components/app/page";

export default function Categories() {

  const [formData, setFormData] = useState({})
  const [isOpened, setIsOpened] = useState(false)

  function handleEdit(row) {
    setFormData(row)
    setIsOpened(true)
  }

  function handleClose() {
    setIsOpened(false)
  }

  function handleSave(formData) {
    console.log("handleSave", formData)
    setIsOpened(false)
  }

  return <div>
    <Page title="Categories">
      <ListCategories onEdit={handleEdit} />
      <EditCategory 
        formData={formData}
        isOpened={isOpened}
        onClose={handleClose}
        onSave={handleSave}
         />
    </Page>
  </div>
}