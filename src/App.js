import { useState } from 'react';
import './App.css';
import Keyboard from './Keyboard';
import { Layout1, defaultLayout } from './layout';

const keyboard1Styles = {
  keyboard: {
    background: '#004134',
  },
  keyboardKeys: {
    padding: '5px'
  },
  keyboardKey: {
    height: '50px'
  }
}

const keyboard2Styles = {
  keyboard: {
    background: '#430b4a',
  },
  keyboardKeys: {
    padding: '5px'
  },
  keyboardKey: {
    height: '60px'
  }
}

function App() {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeKeyboard, setActiveKeyboard] = useState(0)
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <h1>Virtual Keyboard React js</h1>
      <button onClick={() => setActiveKeyboard(0)}>Show Keyboard1</button>
      <button onClick={() => setActiveKeyboard(1)}>Show Keyboard2</button>
      <textarea value={input} onChange={onChange} class="use-keyboard-input" style={{ position: 'absolute', top: '130px', right: '30px', width: '300px' }} onFocus={setShowKeyboard}  ></textarea>
      {
        activeKeyboard === 0 ?
          <Keyboard layout={defaultLayout} input={input} setInput={setInput} show={showKeyboard} setShow={setShowKeyboard} styles={keyboard1Styles} /> :
          <Keyboard layout={Layout1} input={input} setInput={setInput} show={showKeyboard} setShow={setShowKeyboard} styles={keyboard2Styles} />
      }
    </div>
  );
}

export default App;
