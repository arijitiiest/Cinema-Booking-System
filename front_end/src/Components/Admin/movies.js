import React from "react";
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
  SingleFieldList,
  ArrayInput,
  SimpleFormIterator,
  ChipField,
  // eslint-disable-next-line
  UrlField,
  RadioButtonGroupInput,
} from "react-admin";

import Icon from "@material-ui/icons/Theaters";
import Chip from "@material-ui/core/Chip";

export const MovieIcon = Icon;

const TextArrayField = ({ record, source }) => {
  if (!record) return <></>;
  const array = record[source];
  if (typeof array === "undefined" || array === null || array.length === 0) {
    return <div />;
  } else {
    return (
      <>
        {array.map((item) => (
          <Chip label={item} key={item} />
        ))}
      </>
    );
  }
};
TextArrayField.defaultProps = { addLabel: true };

export const MovieList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        {/* <TextField source="desc" /> */}
        <TextArrayField source="genres">
          <SingleFieldList>
            <ChipField source="id" />
          </SingleFieldList>
        </TextArrayField>
        <TextArrayField source="casts">
          <SingleFieldList>
            <ChipField source="id" />
          </SingleFieldList>
        </TextArrayField>
        <TextArrayField source="crews">
          <SingleFieldList>
            <ChipField source="id" />
          </SingleFieldList>
        </TextArrayField>
        <TextField source="running_time" />
        <TextField source="format" />
        <TextArrayField source="languages">
          <SingleFieldList>
            <ChipField source="id" />
          </SingleFieldList>
        </TextArrayField>
        <TextField source="age_level" />
        {/* <UrlField source="image_url" /> */}
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
        <TextInput multiline source="desc" />
        <ArrayInput source="genres">
          <SimpleFormIterator>
            <TextInput />
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="casts">
          <SimpleFormIterator>
            <TextInput />
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="crews">
          <SimpleFormIterator>
            <TextInput />
          </SimpleFormIterator>
        </ArrayInput>
        <NumberInput source="running_time" />
        <RadioButtonGroupInput
          source="format"
          choices={[
            { id: "2D", name: "2D" },
            { id: "3D", name: "3D" },
          ]}
        />
        <ArrayInput source="languages">
          <SimpleFormIterator>
            <TextInput />
          </SimpleFormIterator>
        </ArrayInput>
        <NumberInput source="age_level" />
        <TextInput source="image_url" />
      </SimpleForm>
    </Create>
  );
};
