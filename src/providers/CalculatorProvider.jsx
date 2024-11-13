import React, { useReducer } from 'react';
import CalculatorContext from '../context/CalculatorContext';

const initialState = {
    displayValue: "0",
    firstValue: null,
    waitingForSecondValue: false,
    operator: null,
    expenses: JSON.parse(localStorage.getItem('expenses')) || [],
};

const performCalculation = (firstValue, operator, secondValue) => {
    const first = parseFloat(firstValue);
    const second = parseFloat(secondValue);

    switch (operator) {
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "*":
            return first * second;
        case "/":
            return second !== 0 ? first / second : "Error";
        default:
            return second;
    }
};

const calculatorReducer = (state, action) => {
    switch (action.type) {
        case "INPUT_DIGIT":
            if (state.waitingForSecondValue) {
                return {
                    ...state,
                    displayValue: action.payload,
                    waitingForSecondValue: false,
                };
            }
            return {
                ...state,
                displayValue: state.displayValue === "0" ? action.payload : state.displayValue + action.payload,
            };
        case "CHOOSE_OPERATOR":
            if (state.operator && state.waitingForSecondValue) {
                return { ...state, operator: action.payload };
            }
            return {
                ...state,
                firstValue: state.displayValue,
                waitingForSecondValue: true,
                operator: action.payload,
            };
        case "CLEAR":
            return { ...state, displayValue: "0" };
        case "CALCULATE":
            if (state.operator && state.firstValue != null) {
                const result = performCalculation(state.firstValue, state.operator, state.displayValue);
                return {
                    ...state,
                    displayValue: String(result),
                    firstValue: result,
                    waitingForSecondValue: false,
                    operator: null,
                };
            }
            return state;
        case "ADD_EXPENSE":
            const updatedExpenses = [...state.expenses, action.payload];
            localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
            return {
                ...state,
                expenses: updatedExpenses,
                displayValue: "0",
            };
        default:
            return state;
    }
};

const CalculatorProvider = ({ children }) => {
    const [state, dispatch] = useReducer(calculatorReducer, initialState);

    return (
        <CalculatorContext.Provider value={{ state, dispatch }}>
            {children}
        </CalculatorContext.Provider>
    );
};

export default CalculatorProvider;
