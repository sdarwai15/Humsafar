export interface User {
    _id: string;
    name?: string;
    email?: string;
    emailVerified?: Date;
    image?: string;
    hashedPassword?: string;
    favouriteIds?: string[];
    createdAt: Date;
    updatedAt: Date;
}