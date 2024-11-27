const express = require("express");
const app = express();
const port = 3000;


const iosUrl = "https://apps.apple.com/us/app/hubmee/id1357144691";
const androidUrl = "https://play.google.com/store/apps/details?id=com.hubmee.app";
const defaultUrl = "https://web.hubmee.com";

app.get("/", (req, res) => {
    const userAgent = req.headers["user-agent"] || "";

    if (/android/i.test(userAgent)) {
        res.redirect(androidUrl);
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
        res.redirect(iosUrl);
    } else {
        res.redirect(defaultUrl);
    }
});

app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});
