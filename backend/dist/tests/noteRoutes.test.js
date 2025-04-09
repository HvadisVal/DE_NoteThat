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
const dotenv_1 = __importDefault(require("dotenv"));
// ✅ Load environment variables from .env (especially TEST_USER_TOKEN)
dotenv_1.default.config();
// ✅ Create a minimal Express app instance for isolated testing
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware to parse JSON bodies
app.use('/api/notes', note_routes_1.default); // Mount the note routes for testing
describe('Notes API', () => {
    // ✅ Load a valid token from .env to simulate a logged-in user
    const token = process.env.TEST_USER_TOKEN;
    // ✅ Test 1: GET request without a token should be unauthorized
    it('should return 401 if user is not authenticated', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app).get('/api/notes');
        expect(res.statusCode).toBe(401);
    }));
    // ✅ Test 2: POST request without a token should also be unauthorized
    it('should fail to create note without token', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app).post('/api/notes').send({
            title: 'Test Note',
            content: 'This is a test note',
        });
        expect(res.statusCode).toBe(401);
    }));
    // ✅ Test 3: GET request with a valid token should succeed
    it('should return 200 and notes for valid token', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app)
            .get('/api/notes')
            .set('Authorization', `Bearer ${token}`);
        // Expect success — either 200 OK (if notes exist) or 204 No Content (if none)
        expect([200, 204]).toContain(res.statusCode);
    }));
});
