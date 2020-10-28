import React from "react";
import {
  Datagrid,
  List,
  TextField,
  NumberField,
  TextInput,
  NumberInput,
  Create,
  SimpleForm,
  EditButton,
  DeleteButton,
} from "react-admin";

import Icon from "@material-ui/icons/EventSeat";
export const SeatIcon = Icon;

export const SeatList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="row_no" />
        <NumberField source="col_no" />
        <TextField source="screen" />
        <NumberField source="price" />
        <EditButton basePath="/seats" />
        <DeleteButton basePath="/seats" />
      </Datagrid>
    </List>
  );
};

export const SeatCreate = (props) => {
  return (
    <Create title="Create a Movie" {...props}>
      <SimpleForm>
        <TextInput source="row_no" />
        <NumberInput source="col_no" />
        <TextInput source="screen" />
        <NumberInput source="price" />
      </SimpleForm>
    </Create>
  );
};
