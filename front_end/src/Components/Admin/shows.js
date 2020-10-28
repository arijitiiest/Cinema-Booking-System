import React from "react";
import {
  Create,
  Datagrid,
  DateField,
  DateInput,
  DeleteButton,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

import Icon from "@material-ui/icons/Movie";
export const ShowIcon = Icon;

export const ShowList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="movie.title" />
        <TextField source="showtime" />
        <TextField source="screen" />
        <TextField source="language" />
        <DateField source="date" />
        <EditButton basePath="/shows" />
        <DeleteButton basePath="/shows" />
      </Datagrid>
    </List>
  );
};

export const ShowCreate = (props) => {
  return (
    <Create title="Create a Show" {...props}>
      <SimpleForm>
        <TextInput source="movie_id" />
        <TextInput source="showtime" />
        <TextInput source="screen" />
        <TextInput source="language" />
        <DateInput source="date" />
      </SimpleForm>
    </Create>
  );
};
