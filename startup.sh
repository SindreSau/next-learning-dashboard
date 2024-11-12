#!/bin/bash

# Run database migrations
echo "Running database migrations..."
pnpm drizzle-kit push

# Run database seeding
echo "Checking if database needs seeding..."
bun src/db/seedDb.ts

# Start the Next.js application using standalone server
echo "Starting Next.js application..."
node .next/standalone/server.js