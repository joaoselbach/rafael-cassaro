import { CgSize } from "react-icons/cg"

export const CustomForm = ({ status, message, onValidated }) => {
  let email, name, phone, idea, size
  const submit = () =>
    email &&
    name &&
    phone &&
    idea &&
    size &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
      PHONE: phone.value,
      IDEA: idea.value,
      SIZE: size.value
    })

  return (
    <div
      style={{
        background: '#efefef',
        borderRadius: 2,
        padding: 10,
        display: 'inline-block'
      }}
    >
      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: 'green' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: '2em', padding: 5 }}
        ref={node => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <br />
      <input
        style={{ fontSize: '2em', padding: 5 }}
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <input
        style={{ fontSize: '2em', padding: 5 }}
        ref={node => (phone = node)}
        type="phone"
        placeholder="Your phone"
      />
      <input
        style={{ fontSize: '2em', padding: 5 }}
        ref={node => (idea = node)}
        type="text"
        placeholder="idea"
      />
      <input
        style={{ fontSize: '2em', padding: 5 }}
        ref={node => (size = node)}
        type="text"
        placeholder="Size"
      />
      <br />
      <button style={{ fontSize: '2em', padding: 5 }} onClick={submit}>
        Submit
      </button>
    </div>
  )
}
