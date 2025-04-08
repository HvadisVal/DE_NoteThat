"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const noteController_1 = require("../controllers/noteController");
const authController_1 = require("../controllers/authController");
const router = express_1.default.Router();
router.use(authController_1.securityToken); // all routes below require auth
router.get('/', noteController_1.getNotes);
router.post('/', noteController_1.createNote);
router.put('/:id', noteController_1.updateNote);
router.delete('/:id', noteController_1.deleteNote);
exports.default = router;
