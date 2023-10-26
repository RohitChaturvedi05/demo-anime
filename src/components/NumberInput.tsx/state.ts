export interface State {
    value: string;
    isDirty?: boolean;
    isValid?: boolean;
    min?: number;
    max?: number;
}
export type Actions =
    | { type: 'SET_VALUE'; value: string }
    | { type: 'INCREASE_VALUE' }
    | { type: 'DECREASE_VALUE' }
    | { type: 'VALIDATE_VALUE' };

export const isValidInput = (
    value: string | number,
    min?: number,
    max?: number
) => {
    if (isNaN(Number(value))) {
        return false;
    }
    if (min !== undefined && Number(value) < min) {
        return false;
    }
    if (max !== undefined && Number(value) > max) {
        return false;
    }
    return true;
};

export const validateInputRange = (
    newValue: number,
    min?: number,
    max?: number
) => {
    if (min !== undefined && newValue <= min) {
        return min;
    }
    if (max !== undefined && newValue >= max) {
        return max;
    }
    return newValue;
};

const checkInputState = (value: string, min?: number, max?: number) => {
    const isDirty = value !== '';
    const isValid = isValidInput(value, min, max);
    return {
        isDirty,
        isValid,
    };
};

export const InitialState: State = {
    value: '',
    min: undefined,
    max: undefined,
    isDirty: false,
    isValid: false,
};
export const reducer = (state: State, action: Actions) => {
    switch (action.type) {
        case 'SET_VALUE':
            return {
                ...state,
                ...checkInputState(action.value, state.min, state.max),
                value: action.value,
            };
        case 'INCREASE_VALUE': {
            const newValue = Number(state.value) + 1;
            const value = String(
                validateInputRange(newValue, state.min, state.max)
            );
            return {
                ...state,
                ...checkInputState(value, state.min, state.max),
                value,
            };
        }
        case 'DECREASE_VALUE': {
            const newValue = Number(state.value) - 1;
            const value = String(
                validateInputRange(newValue, state.min, state.max)
            );
            return {
                ...state,
                ...checkInputState(value, state.min, state.max),
                value,
            };
        }
        default:
            return state;
    }
};
