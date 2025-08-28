import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();
if(process.env.NODE_ENV !== "production"){
    globalThis.prisma =db;
}
//globalThis.prsima: this global variable is used to store the PrismaClient instance is reused across the application, preventing multiple instances in development due to hot reloading.each time your application relads a new instance of prisma client is created which can lead to connection issues with data base