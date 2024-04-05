import React from 'react';
import { Stage, Layer, Line } from 'react-konva';

const KonvaApp = (props: any) => {
  const [lines, setLines] = React.useState<any>([]);
  const isDrawing = React.useRef(false);
  const handleMouseDown = (e: any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool: props.tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e: any) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };
  const LionImage = () => {
    return null;
  };

  //
  return (
    <div>
      <Stage
        width={window.innerWidth - 50}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        onTouchMove={handleMouseMove}
        style={{ background: props.bgColor }}
      >
        <Layer>
          {lines.map(
            (
              line: {
                points:
                  | number[]
                  | Int8Array
                  | Uint8Array
                  | Uint8ClampedArray
                  | Int16Array
                  | Uint16Array
                  | Int32Array
                  | Uint32Array
                  | Float32Array
                  | Float64Array
                  | undefined;
                tool: string;
              },
              i: React.Key | null | undefined
            ) => (
              <Line
                key={i}
                points={line.points}
                stroke={props.color}
                strokeWidth={props.penPx}
                opacity={props.penOpacity}
                tension={0.5}
                lineCap="round"
                lineJoin="round"
                globalCompositeOperation={
                  line.tool === 'eraser' ? 'destination-out' : 'source-over'
                }
              />
            )
          )}
        </Layer>
        <Layer>
          <LionImage></LionImage>
        </Layer>
      </Stage>
    </div>
  );
};

export default KonvaApp;
