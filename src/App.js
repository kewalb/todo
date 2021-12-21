import "./App.css";
import { useState } from "react";
import Active from "./components/active";
import Completed from "./components/completed";
import { Form, Button, Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [activity, setActivity] = useState({});
  const [active, setActive] = useState([]);
  const [completed, setCompleted] = useState([]);

  
  const handleClick = () => {
    setActivity({
      name: name,
      description: description,
      time: Date.now(),
    });
    // console.log(activity);
    if(active === []){
      setActive([activity])
    }
    else{
    setActive([ ...active, activity ]);
    // console.log(active)
    }
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
    // console.log(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div className="App">
      <h2 style={{ fontFamily: "sans-serif" }}>To-Do</h2>
      <p>Organise your day-to-day activities with a TO-DO list.</p>
      <Form
        style={{
          width: 800,
          textAign: "center",
          margin: "auto",
          marginTop: 25,
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Enter your activity for the day :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter activity"
            onChange={handleNameChange}
            required={true}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Add description for your activity"
            onChange={handleDescriptionChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          onClick={handleClick}
        >
          Add activity
        </Button>
      </Form>

      {/* Navbar */}

      <BrowserRouter>
        <Navbar bg="default" expand="lg" style={{ margin: 20 }}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="me-auto"
                style={{ display: "flex", width: "100%" }}
              >
                <NavLink
                  to="/active"
                  style={{
                    width: "50%",
                    textDecoration: "none",
                    color: "inherit",
                    padding: "10px",
                  }}
                >
                  Active
                </NavLink>
                <NavLink
                  style={{
                    width: "50%",
                    textDecoration: "none",
                    color: "inherit",
                    padding: "10px",
                  }}
                  to="/completed"
                >
                  Completed
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route
            path="/active"
            component={() => (
              <Active
                active={active}
                setActive={setActive}
                setCompleted={setCompleted}
              />
            )}
          />
          <Route path="/completed" component={Completed} />
          {/* <Route path="/" exact component={App} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
