System.register([], function (exports_1, context_1) {
    "use strict";
    var start, PORT, DB_URL;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            start = context_1.import("./Server.js");
            PORT = process.env.PORT || 3000;
            DB_URL = process.env.DB_URL;
            start(PORT, DB_URL);
        }
    };
});
