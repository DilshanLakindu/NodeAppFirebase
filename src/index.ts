import express from "express";
import { authRoutes } from "./../src/routes/authRoutes";
import { errorHandler } from "./utils/errorHandler";
import { db } from "./config/firebase";
const app = express();

// Middleware
app.use(express.json());
app.use(errorHandler);

app.post("/auth/generateCustomToken", async (req, res) => {
  const { uid, email, displayName } = req.body;
  if (!uid || !email || !displayName) {
    return res.status(400).json({ message: "Invalid request body" });
  }

  try {
    const usersCollection = db.collection("users");

    const newUser = {
      uid: req.body.uid,
      email: req.body.email,
      displayName: req.body.displayName,
    };

    const result = await usersCollection.add(newUser);
    res.send({ message: "User created", id: result.id });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Something went wrong" });
  }
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  app.get("/", (req, res) => {
    console.log(`Server started on porsssst ${port}`);
  });
  app.use("/auth", authRoutes);
});
