import express from "express";
import "./config/env.js";
import { PORT } from "./config/env.js";
import { prisma } from "./config/prisma.js";

const app = express();
app.use(express.json());


// async function createUser() {
//     const user = await prisma.user.create({
//         data: {
//             email: "john@example.com",
//             name: "John Doe",
//             password: "password123",
//         },
//     });
//     console.log("User created:", user);
// };


// app.get("/v1/users/create-user", async (req, res) => {
//     try{
//         await createUser();
//         res.status(200).send({ message: "User created successfully" });
//     } catch (error) {
//         console.error("Error creating user:", error);
//         res.status(500).send({ message: "Error creating user" });
//     }
// });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
