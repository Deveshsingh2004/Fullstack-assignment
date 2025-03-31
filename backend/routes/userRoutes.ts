import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Route to save a user (Register)
router.post('/register', async (req:any, res:any) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    // Save user to the database
    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    res.status(201).json(user); // Respond with the created user
  } catch (error: any) {
    console.error('Error saving user:', error);

    // Handle specific Prisma errors
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'User with this email already exists.' });
    }

    // Handle other errors
    res.status(500).json({
      error: 'An unexpected error occurred.',
      details: error.message || 'No additional details available.',
    });
  }
});

// Route to login a user
router.post('/login', async (req:any, res:any) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    // Check if user exists and validate password
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error: any) {
    console.error('Error logging in:', error);
    res.status(500).json({
      error: 'An unexpected error occurred.',
      details: error.message || 'No additional details available.',
    });
  }
});

export default router;
