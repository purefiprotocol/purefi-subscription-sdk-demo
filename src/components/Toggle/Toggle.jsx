const Toggle = (props) => {
  const { value, onChange, options, name, readOnly, flex = false } = props;

  return (
    <div>
      {options &&
        options.map((option, index) => {
          const inputId = `${name}_${index}}`;
          return (
            <div
              key={index}
              className={`form-check${flex ? ' form-check-inline' : ''}`}
            >
              <label
                className="form-check-label d-flex align-items-center"
                htmlFor={inputId}
              >
                <input
                  id={inputId}
                  className="form-check-input"
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={onChange}
                  style={{ height: '12px' }}
                  readOnly={readOnly}
                />
                <span>{option.label}</span>
              </label>
            </div>
          );
        })}
    </div>
  );
};

export default Toggle;
