import cors from "cors";
import express from "express";

const app = express();

app.use(cors()); // Include this line to enable CORS

const handler = (req, res) => {
  const { email, password } = req.body;

  // Mock user database
  const users = [{ email: "test@email.com", password: "pass1" }];

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.status(200).json({ message: "Login successful", user });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

app.post("/api/login", handler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
