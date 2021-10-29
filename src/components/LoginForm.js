export default function LoginForm({
  value: { credentialObject, setCredentialObject }
}) {
  return (
    <div className="login-form-container">
      <div className="input-container">
        <div className="input-type">required *</div>
        <div className="error-msg">error</div>
        <input
          type="text"
          className="input"
          onChange={(e) =>
            setCredentialObject({
              ...credentialObject,
              username: e.target.value
            })
          }
        />
      </div>
      <div className="input-container">
        <div className="input-type">required *</div>
        <div className="error-msg">error</div>
        <input
          type="password"
          className="input"
          onChange={(e) =>
            setCredentialObject({
              ...credentialObject,
              password: e.target.value
            })
          }
        />
      </div>
    </div>
  );
}
