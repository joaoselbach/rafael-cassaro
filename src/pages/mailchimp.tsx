import React, { Component } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { CustomForm } from '~/components/LeadsSubscribe'

// a basic form
const LeadsSubscribe = ({ status, message, onValidated }) => {
  const url =
    'https://rafaelcassaro.us14.list-manage.com/subscribe/post?u=756d29b82d10ce1242f31a667&amp;id=0b2b283b93&amp;f_id=002385e0f0'
  return (
    <div>
        
      <h1>react-mailchimp-subscribe Demo</h1>
      <h2>Default Form</h2>
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
      />
    </div>
  )
}

export default LeadsSubscribe