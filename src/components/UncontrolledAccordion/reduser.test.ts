import {reduser, stateType, TOGGLE_COLLAPSED} from "./reduser";

test("collapsed should be true", () => {

    const state: stateType = {
        collapsed: false,
    };
    const newState = reduser(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)
});

test("collapsed should be false", () => {

    const state: stateType = {
        collapsed: true,
    };
    const newState = reduser(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false)
});