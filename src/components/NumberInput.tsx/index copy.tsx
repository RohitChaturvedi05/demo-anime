import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { InputProps } from '@mui/material/Input';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { InputActions, InputContainer } from './styles';

const NumericRegex = new RegExp(/(^\d{1,}\.{0,1}\d{0,}$)/);
const DEBOUNCE_TIME = 200;

interface Props extends Omit<InputProps, 'onChange'> {
    min?: number;
    max?: number;
    value?: number;
    debounceTime?: number;
    onChange: (value: number) => void;
}

const NumberInput: React.FC<Props> = ({
    value: propValue = '',
    debounceTime = DEBOUNCE_TIME,
    max,
    min,
    onChange,
    ...restProps
}) => {
    const [value, setValue] = useState<string>(String(propValue));

    const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '' || NumericRegex.test(value)) {
            setValue(value);
        }
    };

    const onIncrease = () => {
        setValue((prev) => String(Number(prev) + 1));
    };

    const onDecrease = () => {
        setValue((prev) => {
            const prevValue = Number(prev);
            return String(prevValue === 0 ? prev : prevValue - 1);
        });
    };

    const onArrowKeyDown = (e: any) => {
        if (e.key === 'ArrowDown') onDecrease();
        if (e.key === 'ArrowUp') onIncrease();
    };

    useEffect(() => {
        setValue(String(propValue));
    }, [setValue, propValue]);

    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            if (isNaN(Number(value))) {
                setValue('');
                return;
            }
            onChange && onChange(Number(value));
        }, debounceTime);
        return () => clearTimeout(delayInputTimeoutId);
    }, [setValue, onChange, value, debounceTime]);

    return (
        <InputContainer>
            <input
                min={min}
                max={max}
                type="text"
                value={value}
                pattern="[0-9]"
                inputMode="numeric"
                onKeyDown={onArrowKeyDown}
                onChange={onValueChange}
            />
            <InputActions>
                <button onClick={onIncrease}>
                    <ArrowDropUp className="up-arrow" />
                </button>
                <button onClick={onDecrease}>
                    <ArrowDropDown className="down-arrow" />
                </button>
            </InputActions>
        </InputContainer>
    );
};

export default NumberInput;
