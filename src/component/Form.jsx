import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      Password: "",
    };
  }
  submit() {
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h1 id="Heading">Form Handling</h1>
        <input
          type="text"
          placeholder="Username"
          name="Username"
          onChange={(e) => {
            this.setState({ Username: e.target.value });
          }}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="Password"
          onChange={(e) => {
            this.setState({ Password: e.target.value });
          }}
        />
        <br />
        <br />
        <button id="btn"
          onClick={() => {
            this.submit();
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}
export default Form;
