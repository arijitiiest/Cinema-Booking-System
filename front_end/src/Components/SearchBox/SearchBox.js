import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  const [keyword, setKeyword] = useState("");
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Movies...."
        className="mr-sm-2 ml-sm-5"
        style={{ borderRadius: "5px", height: "36px", display: "flex", alignItems: "center" }}
      ></Form.Control>
      <Button
        type="submit"
        variant="outline-success"
        className="p-2"
        style={{ borderRadius: "5px", height: "36px", display: "flex", alignItems: "center" }}
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
