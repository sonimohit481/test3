import React from "react";
const initial = {
  email: "",
  password: "",
};
export const Login = () => {
  const [data, Setdata] = React.useState(initial);
  const { email, password } = data;
  const handlechnage = (e) => {
    const { name, value } = e.target;
    Setdata((pre) => ({ ...pre, [name]: value }));
  };
  // const login = (e) => {
  //   e.preventDefault();
  //   fetch(`https://reqres.in/api/login`).then((res));
  // };
  return (
    <div>
      <form>
        {/* <form onSubmit={Login}> */}
        <input
          type="text"
          placeholder="username"
          onChange={handlechnage}
          name="email"
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handlechnage}
          name="password"
          value={password}
        />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};
