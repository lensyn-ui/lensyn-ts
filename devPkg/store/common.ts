interface CommonState {
    moduleState: string;
}

const initState: CommonState = {
    moduleState: "模块信息"
};

const getters  = {
    moduleState: (state: CommonState) => state.moduleState
};

export default {
    state: {...initState},
    getters
};