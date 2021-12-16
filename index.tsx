import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { FastComponentButton } from './components/FastComponentButton';
import { FastFoundationButton } from './components/FastFoundationButton';
import Hello from './components/Hello';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Hello name="test" nonExistentPropName />
        <FastComponentButton ariaLabel="aria label" nonExistentPropName>
          test
        </FastComponentButton>
        <FastFoundationButton label="test" nonExistentPropName />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
