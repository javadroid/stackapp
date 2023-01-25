export const setToLocalStorage = (payload) => {
    for (const key in payload) {
        localStorage.setItem(key, payload[key]);
    }
    localStorage.setItem("loginState", !0);
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
        loginState: localStorage.getItem("loginState") ? !0 : !1,
        access_token: localStorage.getItem("access_token") ? localStorage.getItem("access_token") : null,
        refresh_token: localStorage.getItem("refresh_token") ? localStorage.getItem("refresh_token") : null,
        pk: localStorage.getItem("pk") ? localStorage.getItem("pk") : null,
        account_type: localStorage.getItem("account_type") ? localStorage.getItem("account_type") : null,
        blood_group: localStorage.getItem("blood_group") ? localStorage.getItem("blood_group") : null,
        gender: localStorage.getItem("gender") ? localStorage.getItem("gender") : null,
        location: localStorage.getItem("location") ? localStorage.getItem("location") : null,
        center_name: localStorage.getItem("center_name") ? localStorage.getItem("center_name") : null,
        phone: localStorage.getItem("phone") ? localStorage.getItem("phone") : null,
        rc_number: localStorage.getItem("rc_number") ? localStorage.getItem("rc_number") : null,
        id: localStorage.getItem("id") ? localStorage.getItem("id") : null,
    };
    return initialState;
}

export const setVisitStorage = (value) => {
  localStorage.setItem("1da03392-d51f-4276-a1d6-34fbd7f5b16a", value);
};

export const getVisitStorage = (key) => {
  return localStorage.getItem(key);
};

export const removeVisitStorage = (key) => {
  localStorage.removeItem(key);
};

export const clearVisitStorage = () => {
  localStorage.clear();
};