import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoHook } from './components/06-memos/MemoHook';
// import { Memorize } from './components/06-memos/Memorize';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { HooksApp } from './HooksApp';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemoHook />
  </React.StrictMode>
);