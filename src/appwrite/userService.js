import { Client, Databases, ID } from "appwrite";
import conf from "../conf/conf";

export class UserService {
    client = new Client()
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
    }

    async createUser({ fullName, email, password, username }) {
        try {
            const createdUser = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteUserTableId,
                ID.unique(),
                {
                    fullName,
                    email,
                    password,
                    username,
                }
            )
        } catch (error) {
            console.log("Error in creating user for database: ", error.message)
            throw error
        }
    }
}

const userService = new UserService();
export default userService