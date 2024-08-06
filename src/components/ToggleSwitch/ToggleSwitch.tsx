import './ToggleSwitch.css';

function ToggleSwitch(props: { isOn: boolean; onSwitch?: (isOn: boolean) => void }) {
  return (
    <div
      className={props.isOn ? 'toggle-switch-container toggle-switch-container-on' : 'toggle-switch-container'}
      onClick={() => {
        if (props.onSwitch) props.onSwitch(!props.isOn);
      }}
    >
      <div className={props.isOn ? 'toggle-switch-ball toggle-switch-ball-on' : 'toggle-switch-ball'}></div>
    </div>
  );
}

export default ToggleSwitch;
