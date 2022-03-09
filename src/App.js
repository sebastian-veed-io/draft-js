/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  FC,
  useCallback,
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';
import logo from './logo.svg';
import './App.css';
import { Editor, EditorState, RichUtils } from "draft-js";

function App() {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty()); 
  const onChange = (state) => setEditorState(state);
  const DummyRow = useMemo(props => {
    <div><h1>BLOCK</h1><div {...props}></div></div>
  });
  const subtitleRowBlock = useMemo(
    () => ({
      component: DummyRow,
    }),
    [DummyRow],
  );

  const myBlockRenderer = useCallback(
    (block) => {
      return subtitleRowBlock;
    },
    [subtitleRowBlock],
  );

  return (
    <div className="App">
      <div className="editors">
					<Editor
						editorState={editorState}
						onChange={onChange}
            blockRendererFn={myBlockRenderer}
					/>
				</div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
