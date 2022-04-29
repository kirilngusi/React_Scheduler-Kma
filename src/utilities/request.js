export const apiUrl =
    process.env.NODE_ENV !== "production"
        ? "http://localhost:5000"
        : "https://api-crawl-tkb.vercel.app/";

export const getData = async (url, token) => {
    const res = await fetch(`${apiUrl}/${url}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    return await res.json();
};

export const postData = async (url, data, token) => {
    const res = await fetch(`${apiUrl}/${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    return await res.json();
};
