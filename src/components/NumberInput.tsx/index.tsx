import React, { ChangeEvent, useEffect, useReducer } from 'react';
import { InputProps } from '@mui/material/Input';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { InitialState, State, reducer } from './state';
import { InputActions, InputContainer, InputControl, Error } from './styles';

const NumericRegex = new RegExp(/(^\d{1,}\.{0,1}\d{0,}$)/);
const DEBOUNCE_TIME = 200;

interface Props extends Omit<InputProps, 'onChange'> {
    min?: number;
    max?: number;
    value?: number;
    debounceTime?: number;
    onChange: (value: number) => void;
}

const initializer = (state: State) => state; // Dummy reducer

const NumberInput: React.FC<Props> = ({
    value: propValue,
    debounceTime = DEBOUNCE_TIME,
    max,
    min,
    onChange,
    ...restProps
}) => {
    const [state, dispatch] = useReducer(
        reducer,
        {
            ...InitialState,
            value: String(propValue || ''),
            min,
            max,
        },
        initializer
    );
    const { value, isValid, isDirty } = state;

    const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '' || NumericRegex.test(value)) {
            dispatch({ type: 'SET_VALUE', value });
        }
    };

    const onIncrease = () => dispatch({ type: 'INCREASE_VALUE' });
    const onDecrease = () => dispatch({ type: 'DECREASE_VALUE' });

    const onArrowKeyDown = (e: any) => {
        if (e.key === 'ArrowDown') onDecrease();
        if (e.key === 'ArrowUp') onIncrease();
    };

    useEffect(() => {
        dispatch({ type: 'SET_VALUE', value: String(propValue || '') });
    }, [dispatch, propValue]);

    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            if (isValid && isDirty && String(propValue || '') !== value) {
                onChange && onChange(Number(value));
            }
        }, debounceTime);
        return () => clearTimeout(delayInputTimeoutId);
    }, [onChange, propValue, value, isValid, isDirty, debounceTime]);

    return (
        <InputContainer className={!isValid && isDirty ? 'invalid' : ''}>
            <InputControl className={!isValid && isDirty ? 'invalid' : ''}>
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
            </InputControl>
            <Error>Invalid Input</Error>
        </InputContainer>
    );
};

export default NumberInput;
