const isProd = process.env.NODE_ENV == "production";

export const AppRoot = isProd
    ? "https://es021.github.io/e-invite/public/index.html"
    : "http://localhost:8082";

export const AppPath = {
    Asset: AppRoot + "/asset",
    Dataset: AppRoot + "/dataset"
};

export const AppImg = {
    bodyBackground: "pattern.jpg",
    header: "banner.jpg",
    get: (name) => { return require(`../image/${name}`); }
};