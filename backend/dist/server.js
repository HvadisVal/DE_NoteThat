"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
// Import DB connection
const database_1 = require("./repository/database");
// Import routes
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const note_routes_1 = __importDefault(require("./routes/note.routes"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
// Load environment variables
dotenv_1.default.config();
// Initialize Express app
const app = (0, express_1.default)();
// ✅ Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // enables req.body parsing
// ✅ Routes
app.use('/api/auth', auth_routes_1.default);
app.use('/api/notes', note_routes_1.default);
app.use('/api/tasks', taskRoutes_1.default);
// ✅ Connect to MongoDB
(0, database_1.connect)();
// ✅ Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
