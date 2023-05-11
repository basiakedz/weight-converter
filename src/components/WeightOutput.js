export const WeightOutput = (props) => {
    return (
        <div className="weight-output" style={{backgroundColor: props.backgroundColor}}>
            <label className="label">{props.label}:</label>
            <span className="value">{parseFloat(`${props.value.toFixed(5)}`)}</span>
        </div>
    );
  };