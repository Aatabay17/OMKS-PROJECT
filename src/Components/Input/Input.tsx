import React, {
  FunctionComponent,
  useEffect,
  ChangeEvent,
  useState,
} from "react";

interface Props {
  placeholder: string;
  type: string;
  pattern?: RegExp;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  errorText?: string;
}

const Input = ({
  placeholder,
  type,
  pattern,
  value,
  onChange,
  errorText,
}: Props) => {
  const [isInvalid, setInvalid] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>("");

  useEffect(() => {
    if (currentValue === "") {
      setInvalid(false);
    }

    if (!pattern?.test(currentValue) && currentValue !== "") {
      setInvalid(true);
    }

    if (pattern?.test(currentValue)) {
      setInvalid(false);
    }
  }, [currentValue, pattern, value]);

  return (
    <>
      <input
        className="input"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => {
          setCurrentValue(e.target.value);
          onChange(e);
        }}
      />
      {isInvalid && <div className="error_text">{errorText}</div>}
    </>
  );
};

export default Input;
