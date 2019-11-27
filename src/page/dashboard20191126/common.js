const GetMHeight = () => {
    return document.body.clientHeight  * 0.5 - 16 - 16 - 1;
};

export const GetTitleHeight = () => {
    return GetMHeight() * 0.15;
};

export const GetTableHeight = () => {
    return GetMHeight() * 0.85;
};

export const GetViewPadding = () => {
    return GetTableHeight() * 0.1;
};
