import React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import { authprovider } from "../../Components/Admin/authProvider";
import {
  MovieCreate,
  MovieList,
  MovieIcon,
} from "../../Components/Admin/movies";
import { ShowCreate, ShowList, ShowIcon } from "../../Components/Admin/shows";
import { SeatCreate, SeatList, SeatIcon } from "../../Components/Admin/seats";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/x-www-form-urlencoded' });
  }
  const { token } = JSON.parse(localStorage.getItem('auth'));
  options.headers.set('authorization', token);
  return fetchUtils.fetchJson(url, options);
};

const AdminView = () => {
  return (
    <Admin
      dataProvider={simpleRestProvider("http://localhost:3000/api", httpClient)}
      authProvider={authprovider}
    >
      <Resource
        name="movies"
        list={MovieList}
        create={MovieCreate}
        icon={MovieIcon}
      />
      <Resource
        name="shows"
        list={ShowList}
        create={ShowCreate}
        icon={ShowIcon}
      />
      <Resource
        name="seats"
        list={SeatList}
        create={SeatCreate}
        icon={SeatIcon}
      />
    </Admin>
  );
};

export default AdminView;
