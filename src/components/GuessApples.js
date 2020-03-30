import React, { useState } from "react";
import { Button, Container, Dropdown, Form, ListGroup } from "react-bootstrap";
import maps from "./GuessApples.json";

import "./GuessApple.css";

const GuessApples = () => {
  const [text, setText] = useState("sha");
  const [selected, setSelected] = useState("1221");

  const handleSubmit = val => {
    setSelected(val);
    const newText = maps[text][val];
    setText(newText);
  };

  return (
    <Container>
      <h2 className="pt-2 text-center">Guess Apples</h2>
      <ListGroup>
        <ListGroup.Item className="text-center">
          <Dropdown>
            <Dropdown.Toggle variant="link" size="lg" id="result">
              {text.toUpperCase()}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Object.keys(maps).map(item => (
                <Dropdown.Item
                  key={`reslut-menu-item-${item}`}
                  eventKey={item}
                  onSelect={key => setText(key)}
                >
                  {item.toUpperCase()}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </ListGroup.Item>
        <ListGroup.Item className="order-list">
          <Form.Check
            type="radio"
            name="order"
            id="order-list-item-1"
            label="1221"
            value="1221"
            checked={selected === "1221"}
            onChange={e => handleSubmit(e.target.value)}
          />
          <Form.Check
            type="radio"
            name="order"
            id="order-list-item-2"
            label="3231"
            value="3231"
            checked={selected === "3231"}
            onChange={e => handleSubmit(e.target.value)}
          />
          <Form.Check
            type="radio"
            name="order"
            id="order-list-item-3"
            label="1223"
            value="1223"
            checked={selected === "1223"}
            onChange={e => handleSubmit(e.target.value)}
          />
          <Form.Check
            type="radio"
            name="order"
            id="order-list-item-4"
            label="123"
            value="123"
            checked={selected === "123"}
            onChange={e => handleSubmit(e.target.value)}
          />
          <Form.Check
            type="radio"
            name="order"
            id="order-list-item-5"
            label="13"
            value="13"
            checked={selected === "13"}
            onChange={e => handleSubmit(e.target.value)}
          />
          <Form.Check
            type="radio"
            name="order"
            id="order-list-item-6"
            label="31"
            value="31"
            checked={selected === "31"}
            onChange={e => handleSubmit(e.target.value)}
          />
          <Form.Check
            type="radio"
            name="order"
            id="order-list-item-7"
            label="33"
            value="33"
            checked={selected === "33"}
            onChange={e => handleSubmit(e.target.value)}
          />
        </ListGroup.Item>
        <ListGroup.Item className="text-center">
          <Button variant="primary" onClick={() => handleSubmit(selected)}>
            Submit
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default GuessApples;
