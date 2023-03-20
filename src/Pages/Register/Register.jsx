import React, { useState } from "react";
import { Input, Grid, Spacer, Button, Loading } from "@nextui-org/react";
// import { MdEmail } from "react-icons/md";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const data = {
    user: {
      username: username,
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName,
    },
  };
  const API_url = "http://localhost:8080/user/";
  const errMsg = [];
  const lowerCaseLetterRegex = /[a-z]/g;
  const upperCaseLetterRegex = /[A-Z]/g;
  const numbersPassword = /[0-9]/g;

  const validateData = () => {
    while (errMsg.length > 0) {
      errMsg.pop();
      setError(false)
    }

    if (username.length === 0) {
      errMsg.push("You need to indicate an username.");
    }

    if (
      password.match(lowerCaseLetterRegex) &&
      !password.match(upperCaseLetterRegex)
    ) {
      errMsg.push("Password must include at least one uppercase letter.");
    }

    if (
      !password.match(lowerCaseLetterRegex) &&
      password.match(upperCaseLetterRegex)
    ) {
      errMsg.push("Password must include at least one lowercase letter.");
    }

    if(!password.match(numbersPassword)) {
        errMsg.push("Password must contain at least a number.")
    }

    if(password.length < 8) {
        errMsg.push("Password must be at least 8 characters long.")
    }

    if (errMsg.length > 0) {
      setError(true);
      throw new Error("data entered incorrectly")
    }
  };
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      validateData();

      const response = await fetch(API_url + "register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if(response.ok) {
        setUsername("")
        setPassword("")
        setVerifyPassword("")
        setEmail("")
        setFirstName("")
        setLastName("")
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Register User</h1>
      <Spacer y={3} />
      <Grid.Container gap={4}>
        <Grid>
          <Input
            clearable
            underlined
            labelPlaceholder="Username"
            value={username}
            onClearClick={() => setUsername("")}
            onInput={(event) => setUsername(event.target.value)}
          />
        </Grid>
        <Grid>
          <Input.Password
            clearable
            underlined
            labelPlaceholder="Password"
            value={password}
            onClearClick={() => setPassword("")}
            onInput={(event) => setPassword(event.target.value)}
          />
        </Grid>
        <Grid>
          <Input.Password
            clearable
            underlined
            labelPlaceholder="Verify Password"
            value={verifyPassword}
            onClearClick={() => setVerifyPassword("")}
            onInput={(event) => setVerifyPassword(event.target.value)}
          />
        </Grid>
        <Grid>
          <Input
            type="email"
            clearable
            underlined
            labelPlaceholder="Email"
            value={email}
            onClearClick={() => setEmail("")}
            onInput={(event) => setEmail(event.target.value)}
          />
        </Grid>
        <Grid>
          <Input
            clearable
            underlined
            labelPlaceholder="First Name"
            value={firstName}
            onClearClick={() => setFirstName("")}
            onInput={(event) => setFirstName(event.target.value)}
          />
        </Grid>
        <Grid>
          <Input
            clearable
            underlined
            labelPlaceholder="Last Name"
            value={lastName}
            onClearClick={() => setLastName("")}
            onInput={(event) => setLastName(event.target.value)}
          />
        </Grid>
      </Grid.Container>
      {password !== verifyPassword && (
        <span className="registerPasswordVerifier">Passwords don't match</span>
      )}
      <Button className="registerBtn" disabled={isLoading} onPress={handleSubmit}>
        {isLoading ? <Loading type="points" color="currentColor" /> : "Submit"}
      </Button>
      {error && errMsg.forEach((msg, index) => <div className="registerPasswordVerifier" key={index}>{msg}</div>)}
    </div>
  );
};

export default Register;
