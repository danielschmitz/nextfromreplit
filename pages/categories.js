
import React, { useEffect, useState } from 'react';
import ListCategories from '../components/categories/list'
import EditCategory from '../components/categories/edit'
import Page from "../components/app/page";
import { Button, LinearProgress } from "@material-ui/core"
import http from '../http'
import { mutate } from "swr";

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

  async function handleSave(data) {
    console.log("handleSave", data)
    
    const apiUrl = '/api/categories'
    const result = await http(
      {
        method: data._id ? 'PUT' : 'POST',
        url: data._id ? `${apiUrl}/${data._id}` : apiUrl,
        data
      }
    )


    mutate('/api/categories') //reload categories
    setIsOpened(false)
  }

  function handleNew() {
    setFormData({ name: '', description: '' })
    setIsOpened(true)
  }

  const actions = <>
    <Button size="small" color="primary" onClick={handleNew}>
      New Category
        </Button>
  </>

  return <div>
    <Page title="Categories" actions={actions}>
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