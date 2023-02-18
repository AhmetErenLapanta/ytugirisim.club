export const fetcher = async (url, option = {}) => {
    let response;
    if (!option) {
        response = await fetch(url);
    } else {
        response = await fetch(url, option);
    }
    const data = response.json();
    return data;
};
