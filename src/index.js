const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');



const loginRoutes = require('./routes/login'); // Assuming auth routes are in a separate file
const registerRoutes = require('./routes/register'); // Assuming auth routes are in a separate file
const eventsApi = require('./routes/eventsApi');
const contactApi = require('./routes/contactApi');
const customerApi = require('./routes/customerApi');
const leadsApi = require('./routes/leadsApi');
const projectApi = require('./routes/projectApi');
const memberTypesApi = require('./routes/memberTypesApi');
const customerLeadApi = require('./routes/customerLeadApi');
const userApi = require('./routes/userApi');



const protectedRoutes = require("./routes/protected");
const serviceApiRoutes = require("./routes/service/serviceApi");
const createProductRoute = require("./routes/product/createProduct");
const getProductRoute = require("./routes/product/getProduct");
const getProductsRoute = require("./routes/product/getProducts");
const deleteProductRoute = require("./routes/product/deleteProduct");
const updateProductRoute = require("./routes/product/updateProduct");

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(
  cors({
    origin: "http://localhost:8080", // Your front-end domain
    credentials: true, // Allow cookies (if needed)
  })
);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Body parser middleware
app.use(express.json());

// Serve static assets from the "public" directory
app.use(express.static(path.join(__dirname, "public")));
// Serve the React UI at the root path
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "src/public/index.html"));
});

// Mount routes
app.use('/api/', loginRoutes);
app.use('/api/events', eventsApi);
app.use('/api/contact', contactApi);
app.use('/api/customer', customerApi);
app.use('/api/leads', leadsApi);
app.use('/api/project', projectApi);
app.use('/api/memberType', memberTypesApi);
app.use('/api/customerLead', customerLeadApi);
app.use('/api/user', userApi);
// app.use('/protected', protectedRoutes);
// app.use('/register', registerRoutes)
// app.use('/service', serviceApiRoutes);
// app.use('/product/create', createProductRoute);
// app.use('/product/find', getProductRoute);
// app.use('/product/list', getProductsRoute);
// app.use('/product/delete', deleteProductRoute);
// app.use('/product/update', updateProductRoute);

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server listening on port ${port}`));
