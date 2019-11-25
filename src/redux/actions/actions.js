export const actionTypes = {
    COMPLETE_TOGGLE: 'COMPLETE_TOGGLE',
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SAVE_DATE:"SAVE_DATE",
    SHOW_SIDEBAR_TOGLE:"SHOW_SIDEBAR_TOGLE",
    HIDE_SIDE_BAR:"HIDE_SIDE_BAR",
    FAVORATE_TOGGLE:"FAVORATE_TOGGLE"
}


export const saveDate = (payload) => {
    return {
        type: actionTypes.SAVE_DATE,
        payload: payload,
    }
}

export const showAll = () => {
    return {
        type: actionTypes.SHOW_ALL,
    }
}
export const showActive = () => {
    return {
        type: actionTypes.SHOW_ACTIVE,
    }
}
export const showCompleted = () => {
    return {
        type: actionTypes.SHOW_COMPLETED,
    }
}
    
export const completeToggle = (payload) => {
    return {
        type: actionTypes.COMPLETE_TOGGLE,
        payload: payload
    }
};
export const favorateToggle = (payload) => {
    return {
        type: actionTypes.FAVORATE_TOGGLE,
        payload: payload
    }
};

export const showSideBarTogle = (payload) => {
        return {
            type: actionTypes.SHOW_SIDEBAR_TOGLE,
            payload: payload
        }
    }

    
export const hideSideBar = (payload) => {
        return {
            type: actionTypes.HIDE_SIDE_BAR,
            payload: payload
        }
    }
