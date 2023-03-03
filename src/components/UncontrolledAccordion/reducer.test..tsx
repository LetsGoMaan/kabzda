import {reducer, StateType, TOGGLE_CONSTANT} from "./reducer";

test('collapsed should be true', () => {

    ///data

    const state: StateType = {
        collapsed: false
    }

    ///action

    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    //expectation
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {

    ///data

    const state: StateType = {
        collapsed: true
    }

    ///action

    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    //expectation
    expect(newState.collapsed).toBe(false)
})

test("throw error", () => {

    ///data

    const state: StateType = {
        collapsed: false
    }

    ///action
    expect( () => {
        reducer(state, {type: "FAKETYPE"})
    }).toThrowError()

})