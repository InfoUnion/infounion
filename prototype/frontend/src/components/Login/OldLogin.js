import React from "react";
import { Container, Box, Button, Stack } from '@mui/material';

import { Login1 } from './Login1';
import { Register } from '../Register/Register';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: true
    };
  }

  componentDidMount() {
    //default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLoginActive } = this.state;

    if (isLoginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLoginActive: !prevState.isLoginActive }));
  }

  render() {
    const { isLoginActive } = this.state;
    const current = isLoginActive ? "Register" : "Login";
    const currentActive = isLoginActive ? "login" : "register";

    return (
      <Container maxWidth='xl'>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          height='75vh'
        >
          <Stack
            direction='column'
            spacing={1}
          >
            <div className="container" ref={ref => (this.container = ref)}>
              {isLoginActive && (<Login1 containerRef={ref => (this.current = ref)} />)}
              {!isLoginActive && (<Register containerRef={ref => (this.current = ref)} />)}
            </div>

            <RightSide current={current}
              currentActive={currentActive}
              containerRef={ref => (this.rightSide = ref)}
              onClick={this.changeState.bind(this)} />
          </Stack>
        </Box>
      </Container>
    );
  }
}


const RightSide = props => {
  return (
    <div className="right side" ref={props.containerRef} onClick={props.onClick}>
      <Button>
        <div className="text">Switch to {props.current}</div>
      </Button>
    </div>
  );
};

export default Login;