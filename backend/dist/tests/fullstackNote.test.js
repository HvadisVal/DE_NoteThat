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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const note_routes_1 = __importDefault(require("../routes/note.routes"));
const database_1 = require("../repository/database");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/notes', note_routes_1.default);
const token = process.env.TEST_USER_TOKEN;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_1.connect)();
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_1.disconnect)();
}));
describe('🧪 Fullstack Note Creation Test', () => {
    it('should create and retrieve a note for authenticated user', () => __awaiter(void 0, void 0, void 0, function* () {
        const testNote = {
            title: 'Integration Note',
            content: 'Created via fullstack test',
            category: 'Test',
            color: 'bg-blue-400',
            tags: ['e2e'],
            pinned: false
        };
        const createRes = yield (0, supertest_1.default)(app)
            .post('/api/notes')
            .set('auth-token', token)
            .send(testNote);
        console.log('❌ Create response body:', createRes.body); // ⬅️ log actual backend error
        expect(createRes.statusCode).toBe(201);
        expect(createRes.body.title).toBe(testNote.title);
        const getRes = yield (0, supertest_1.default)(app)
            .get('/api/notes')
            .set('auth-token', token);
        expect(getRes.statusCode).toBe(200);
        const found = getRes.body.find((n) => n.title === testNote.title);
        expect(found).toBeDefined();
    }));
});
