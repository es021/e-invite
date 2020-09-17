const isProd = process.env.NODE_ENV == "production";

export const AppRoot = isProd
    ? "https://es021.github.io/e-invite/public/index.html"
    : "http://localhost:8082";

export const ServerRoot = isProd
    ? "https://seedsjobfairapp.com/e-invite/"
    : "http://localhost:8085/e-invite/e-invite/";

export const AppPath = {
    Asset: AppRoot + "/asset",
    Dataset: AppRoot + "/dataset"
};

export const AppImg = {
    header: "header-black.jpg",
    get: (name) => { return require(`../image/${name}`); }
};