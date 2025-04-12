System.register([], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var express, mongoose, app, indexRouter, start;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            express = require("express");
            mongoose = require("mongoose");
            app = express();
            indexRouter = require("./routes");
            start = (port, dbUrl) => __awaiter(void 0, void 0, void 0, function* () {
                app.use(express.json());
                app.use(express.urlencoded());
                app.set("view engine", "ejs");
                app.use(indexRouter);
                try {
                    yield mongoose.connect(dbUrl);
                    app.listen(port, () => console.log(`Server is running on port ${port}`));
                }
                catch (error) {
                    console.log(error);
                }
            });
            exports_1("default", start);
        }
    };
});
