import React, { cloneElement } from "react";
import {
  Create,
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
  NumberInput,
  ArrayField,
  SingleFieldList,
} from "react-admin";

import Icon from "@material-ui/icons/Theaters";
export const MovieIcon = Icon;

export const StringToLabelObject = ({ record, children, ...rest }) =>
  cloneElement(children, {
    record: { label: record },
    ...rest,
  });

export const MovieList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="desc" />
        <TextField source="running_time" />
        <TextField source="format" />
        <TextField source="age_level" />
        <ArrayField source="genres">
          <SingleFieldList >
            <StringToLabelObject>
              <TextField source="label" />
            </StringToLabelObject>
          </SingleFieldList>
        </ArrayField>
        <EditButton basePath="/movies" />
        <DeleteButton basePath="/movies" />
      </Datagrid>
    </List>
  );
};

export const MovieCreate = (props) => {
  return (
    <Create title="Create a Movie" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="desc" multiLine />
        <NumberInput source="running_time" />
        <TextInput source="format" />
        <NumberInput source="age_level" />
        <TextInput source="image_url" />
      </SimpleForm>
    </Create>
  );
};
