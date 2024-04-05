import * as Toolbar from '@radix-ui/react-toolbar';
import * as Slider from '@radix-ui/react-slider';
import { Github } from '@uiw/react-color';
import Popover from './Popover';
const ToolbarApp = (props: any) => {
  const handleChangeTool = (tool: any) => {
    props.setTool(tool);
  };
  const handleColorPicker = () => {
    props.setShowColorPicker(!props.showColorPicker);
  };
  const handleBgColorPicker = () => {
    props.setShowBgColorPicker(!props.showBgColorPicker);
  };
  const handlePenProps = () => {
    props.setShowPenProps(!props.showPenProps);
  };
  const handlePenPx = (v: any) => {
    props.setPenPx(v);
  };
  const handleEraseWidth = (v: any) => {
    props.setEraseWidth(v);
  };
  const handleBgColor = (v: any) => {
    props.setBgColor(v.hex);
    console.log(v.hex);
  };
  const handleShowSettings = (v: any) => {
    props.setShowSettings(v);
  };

  return (
    <Toolbar.Root className="ToolbarRoot" aria-label="Formatting options">
      <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
        <Toolbar.Button
          className="ToolbarToggleItem"
          value="bold"
          aria-label="Bold"
          onClick={(e) => {}}
          data-popover-target="popover-top"
          data-popover-placement="top"
        >
          <i className="fa-regular fa-hand-point-up"></i>
        </Toolbar.Button>
        <Toolbar.Button
          className="ToolbarToggleItem"
          value="pen"
          aria-label="pen"
          onClick={() => {
            handlePenProps();
            handleChangeTool('pen');
          }}
        >
          <i className="fa-solid fa-pencil"></i>
        </Toolbar.Button>
        <Popover show={props.showPenProps}>
          <div style={{ width: 250, height: '100%' }}>
            <span>Pen</span>
            <Slider.Root
              className="SliderRoot"
              defaultValue={[props.penPx]}
              max={10}
              step={1}
              onValueChange={(e) => {
                handlePenPx(e[0]);
              }}
            >
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Volume" />
            </Slider.Root>
            <div style={{ paddingTop: 26 }}>
              <span>Opacity</span>

              <Slider.Root
                className="SliderRoot"
                defaultValue={[props.penOpacity]}
                max={1}
                step={0.1}
                onValueChange={(e) => {
                  props.setPenOpacity(e[0]);
                }}
              >
                <Slider.Track className="SliderTrack">
                  <Slider.Range className="SliderRange" />
                </Slider.Track>
                <Slider.Thumb className="SliderThumb" aria-label="Volume" />
              </Slider.Root>
            </div>
          </div>
        </Popover>
        <Toolbar.Button
          className="ToolbarToggleItem"
          value="eraser"
          aria-label="eraser"
          onClick={(e) => {
            handleChangeTool(e.currentTarget.value);
            props.setShowEraseProps(!props.showEraseProps);
          }}
        >
          <i className="fa-solid fa-eraser"></i>
        </Toolbar.Button>
        <Popover show={props.showEraseProps}>
          <div style={{ width: 250, height: 100 }}>
            <div style={{ paddingTop: 26 }}>
              <span>Erase width</span>

              <Slider.Root
                className="SliderRoot"
                defaultValue={[props.penOpacity]}
                max={1}
                step={0.1}
                onValueChange={(e) => {
                  handleEraseWidth(e[0]);
                }}
              >
                <Slider.Track className="SliderTrack">
                  <Slider.Range className="SliderRange" />
                </Slider.Track>
                <Slider.Thumb className="SliderThumb" aria-label="Volume" />
              </Slider.Root>
            </div>
          </div>
        </Popover>
        <Toolbar.Button
          className="ToolbarToggleItem"
          value="strikethrough"
          aria-label="Strike through"
          onClick={() => {
            alert('will add soon');
          }}
        >
          <i className="fa-solid fa-vector-square"></i>
          <div className="popover"></div>
        </Toolbar.Button>
        <Toolbar.Button
          className="ToolbarToggleItem"
          value="left"
          aria-label="Left aligned"
          onClick={() => {
            alert('will add soon');
          }}
        >
          <i className="fa-regular fa-images"></i>
        </Toolbar.Button>
        <Toolbar.Button
          className="ToolbarToggleItem"
          value="center"
          aria-label="Center aligned"
          onClick={handleBgColorPicker}
        >
          <i className="fa-solid fa-fill"></i>
          <Popover show={props.showBgColorPicker}>
            <Github
              style={{ width: 250 }}
              onChange={(e) => {
                props.setColor(e.hex);
              }}
            />
          </Popover>
        </Toolbar.Button>
        <Popover show={props.showSettings}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p className="Text" style={{ marginBottom: 10 }}>
              Dimensions
            </p>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="width">
                Width
              </label>
              <input className="Input" id="width" defaultValue="100%" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="maxWidth">
                Max. width
              </label>
              <input className="Input" id="maxWidth" defaultValue="300px" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="height">
                Height
              </label>
              <input className="Input" id="height" defaultValue="25px" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="maxHeight">
                Max. height
              </label>
              <input className="Input" id="maxHeight" defaultValue="none" />
            </fieldset>
          </div>
        </Popover>
        <Toolbar.Button
          className="ToolbarToggleItem"
          value="right"
          aria-label="Right aligned"
          onClick={handleColorPicker}
        >
          <i className="fa-solid fa-palette"></i>
        </Toolbar.Button>

        <Popover show={props.showColorPicker}>
          <Github
            style={{ width: 250, height: 100 }}
            onChange={(e) => {
              handleBgColor(e);
            }}
          />
        </Popover>
      </Toolbar.ToggleGroup>
      <div className="ToolbarButtonDiv">
        <Toolbar.Button
          className="ToolbarButton"
          onClick={() => {
            alert('will add soon');
          }}
        >
          <i className="fa-solid fa-layer-group"></i>
        </Toolbar.Button>

        <Toolbar.Button
          className="ToolbarButton"
          style={{}}
          onClick={() => {
            handleShowSettings(!props.showSettings);
          }}
        >
          <div className="popover"></div>
          <i className="fa-solid fa-gear"></i>
        </Toolbar.Button>
      </div>
    </Toolbar.Root>
  );
};
export default ToolbarApp;
