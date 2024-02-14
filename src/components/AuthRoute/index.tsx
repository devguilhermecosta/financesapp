import React, { useContext } from "react";
import { AuthContext } from "../../context";
import AppRoute from "./app.route";
import UserRoute from "./user.route";


export default function AuthRoute(): React.JSX.Element {
  const { user } = useContext(AuthContext);

  return user
  ? <UserRoute />
  : <AppRoute />
}
