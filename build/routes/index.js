"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_1 = __importDefault(require("./main"));
const index_1 = __importDefault(require("./API/index"));
const index_2 = __importDefault(require("./URL/index"));
const router = express_1.default.Router();
router.use("/", main_1.default);
router.use("/api", index_1.default);
router.use("/url", index_2.default);
exports.default = router;
