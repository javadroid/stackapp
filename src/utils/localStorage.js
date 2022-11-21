export const setToLocalStorage = (payload) => {
    for (const key in payload) {
        localStorage.setItem(key, payload[key]);
    }
    localStorage.setItem("loginState", true);
}

export const getFromLocalStorage = (key) => {
    return localStorage.getItem(key);
}

export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}

export const clearLocalStorage = () => {
    localStorage.clear();
}

export const getUserStateFromLocalStorage = () => {
    const initialState = {
        username: localStorage.getItem("username") ? localStorage.getItem("username") : "",
        email: localStorage.getItem("emailAddress") ? localStorage.getItem("emailAddress") : "",
        loginState: localStorage.getItem("loginState") ? true : false,
        access_token: localStorage.getItem("access_token") ? localStorage.getItem("access_token") : null,
        refresh_token: localStorage.getItem("refresh_token") ? localStorage.getItem("refresh_token") : null,
        pk: localStorage.getItem("pk") ? localStorage.getItem("pk") : null,
        account_type: localStorage.getItem("account_type") ? localStorage.getItem("account_type") : null,
        blood_group: localStorage.getItem("blood_group") ? localStorage.getItem("blood_group") : null,
        center_name: localStorage.getItem("center_name") ? localStorage.getItem("center_name") : null,
        phone: localStorage.getItem("phone") ? localStorage.getItem("phone") : null,
        rc_number: localStorage.getItem("rc_number") ? localStorage.getItem("rc_number") : null,
        id: localStorage.getItem("id") ? localStorage.getItem("id") : null,
    };
    return initialState;
}