export default function handler(req, res) {
  const { username, password } = req.body;

  // Mock user database
  const users = [{ email: "test@email.com", password: "pass1" }];

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    res.status(200).json({ message: "Login successful", user });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
}
