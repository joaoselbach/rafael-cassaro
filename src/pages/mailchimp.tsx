import React, { Component, useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { CustomForm } from '~/components/LeadsSubscribe'
import FileUpload from '~/components/FileUpload/file-upload.component'
import { Flex } from '@chakra-ui/react'

// a basic form
const LeadsSubscribe = ({ status, message, onValidated }) => {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  })

  const updateUploadedFiles = files =>
    setNewUserInfo({ ...newUserInfo, profileImages: files })

  const handleSubmit = event => {
    event.preventDefault()
    console.log(event)
    //logic to create new user...
  }

  const url =
    'https://rafaelcassaro.us14.list-manage.com/subscribe/post?u=756d29b82d10ce1242f31a667&amp;id=0b2b283b93&amp;f_id=002385e0f0'

  return (
    <Flex display="flex" alignItems="center" justifyContent="center" h="100vh">
        {/* <h2>Default Form</h2>
        <MailchimpSubscribe url={url} />
        <h2>Custom Form</h2>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        /> */}
        <form onSubmit={handleSubmit}>
          <FileUpload
            accept=".jpg,.png,.jpeg"
            label="Profile Image(s)"
            multiple
            updateFilesCb={updateUploadedFiles}
          />
          <button type="submit">Create New User</button>
        </form>
    </Flex>
  )
}

export default LeadsSubscribe
