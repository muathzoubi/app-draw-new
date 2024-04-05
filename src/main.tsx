import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@radix-ui/themes/styles.css';
import ToolbarApp from './Toolbar.tsx';
import { useState } from 'react';
import MenubarDemo from './navbar.tsx';

export default function Main() {
  const [color, setColor] = useState('#133813');
  const [bgColor, setBgColor] = useState('');
  const [tool, setTool] = React.useState('pen');
  const [penPx, setPenPx] = useState(2);
  const [penOpacity, setPenOpacity] = useState(0.9);
  const [showPenProps, setShowPenProps] = useState(false);
  const [showEraseProps, setShowEraseProps] = useState(false);

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showBgColorPicker, setShowBgColorPicker] = useState(false);
  const [eraseWidth, setEraseWidth] = useState(2);

  return (
    <html>
      <body className="main">
        <div
          style={{ zIndex: 9999 }}
          onClick={() => {
            if (showPenProps) {
              setShowPenProps(false);
            }
            if (showEraseProps) {
              setShowEraseProps(false);
            }
          }}
        >
          <MenubarDemo />
          <ToolbarApp
            setColor={setColor}
            setBgColor={setBgColor}
            color={color}
            setTool={setTool}
            penPx={penPx}
            showPenProps={showPenProps}
            showEraseProps={showEraseProps}
            showColorPicker={showColorPicker}
            showBgColorPicker={showBgColorPicker}
            setShowPenProps={setShowPenProps}
            setShowEraseProps={setShowEraseProps}
            setShowColorPicker={setShowColorPicker}
            setShowBgColorPicker={setShowBgColorPicker}
            setPenPx={setPenPx}
            setPenOpacity={setPenOpacity}
            penOpacity={penOpacity}
            setEraseWidth={setEraseWidth}
            eraseWidth={eraseWidth}
            setShowSettings={setShowSettings}
            showSettings={showSettings}
          />
        </div>
        <div style={{ zIndex: -1 }}>
          <App
            color={color}
            bgColor={bgColor}
            setTool={setTool}
            tool={tool}
            penPx={penPx}
            setPenPx={setPenPx}
            setPenOpacity={setPenOpacity}
            penOpacity={penOpacity}
          />
        </div>
      </body>
    </html>
  );
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
