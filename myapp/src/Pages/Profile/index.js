import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAdded, userToggled } from "../../Store/features/users/UserSlice";

import Header from "../../Components/Header";

export default function Profile() {
  const dispatch = useDispatch();

  const userFirebase = useSelector((state) => state.user);
  const [currentUser, setCurrentUser] = useState([
    {
      accessToken: "",
      createAt: "",
      email: "dcutiyamo@gmail.com",
      id: "",
      lastLogin: "",
      photoUrl: "",
    },
  ]);

  const [currentProfile, setCurrentProfile] = useState({
    name: "",
    surname: "",
    phone: "",
    nickname: "",
  });

  useEffect(() => {
    const userLocalStore = JSON.parse(localStorage.getItem("users"));
    if (userFirebase.length > 0) setCurrentUser(userFirebase);
    else {
      const user = [userLocalStore];
      setCurrentUser(user);
      dispatch(userAdded(userLocalStore));
    }
  }, [userFirebase]);

  const handlerProfile = (e) => {
    let updatableProfile = currentProfile;
    updatableProfile[e.target.name] = e.target.value;

    setCurrentProfile(updatableProfile);
  };

  const saveProfile = () => {};

  return (
    <div>
      <Header />
      <div className="container">
        <div className="card px-5 py-5">
          <div className="row justify-content-center">
            <div className="col-12">
              <img
                className="rounded-circle shadow-4-strong"
                alt="avatar"
                src="./logo192.png"
              />
            </div>
            <span className="col-12">{currentUser[0].email}</span>
          </div>
          <div className="card py-5 d-flex justify-content-start">
            <h1>Profile</h1>
            <div className="row form-group py-3">
              <div className="col-6">
                <label className="form-control-label">Nome</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Nome"
                  onChange={handlerProfile}
                />
              </div>
              <div className="col-6">
                <label className="form-control-label">Sobrenome</label>
                <input
                  type="text"
                  name="surname"
                  className="form-control"
                  placeholder="Sobrenome"
                  onChange={handlerProfile}
                />
              </div>
            </div>
            <div className="row form-group py-3">
              <div className="col-6">
                <label className="form-control-label">Nickname</label>
                <input
                  type="text"
                  name="nickname"
                  className="form-control"
                  placeholder="Nickname"
                  onChange={handlerProfile}
                />
              </div>
              <div className="col-6">
                <label className="form-control-label">Celular</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="(XX) XXXXX-XXXX"
                  onChange={handlerProfile}
                />
              </div>
            </div>
            <button
              className="btn btn-primary a__button"
              type="button"
              onClick={saveProfile}
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
