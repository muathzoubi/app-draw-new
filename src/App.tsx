import './App.css';
import KonvaApp from './konva';

function App(props: any) {
  return (
    <div>
      <KonvaApp
        bgColor={props.bgColor}
        color={props.color}
        tool={props.tool}
        setTool={props.setTool}
        penPx={props.penPx}
        penOpacity={props.penOpacity}
      />
    </div>
  );
}

export default App;
