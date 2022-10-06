export const setToLocalStorage = (payload) => {
    for(const key in payload) {
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
