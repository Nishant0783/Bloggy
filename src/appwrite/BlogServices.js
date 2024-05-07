import { Client, Databases, ID } from "appwrite";
import conf from "../conf/conf";

export class BlogServices {
    client = new Client();
    databases;
    // bucket;

    constructor () {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client)
        // this.bucket = new Storage(this.client)
    }

    async createPost({ userId, title, content, slug, image, category }) {
        try {
            return this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteBlogTableId,
                ID.unique(),
                {
                    userId,
                    title, 
                    content,
                    slug,
                    image,
                    category
                }
            ) 
        } catch (error) {
            console.log("Cannot create Post in database: ", error.message)
            throw error
        }
    }

    // Get single post
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteDatabaseId,
                slug
            )
        } catch (error) {
            console.log("Cannot get post from database: ", error.message)
            throw error
        }
    }
    

    // Get all Posts
    async getPosts() {
        
    }
    
}

const blogServices = new BlogServices()
export default blogServices