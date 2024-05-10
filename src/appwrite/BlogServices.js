import { Client, Databases, ID, Query } from "appwrite";
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
    async getPost(postId) {
        try {
           return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteBlogTableId,
                [
                    Query.equal('$id', [postId])
                ]
           )
        } catch (error) {
            console.log("Cannot get post from database: ", error.message)
            throw error
        }
    }
    

    // Get all Posts
    async getAllPosts() {
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteBlogTableId,
            )
        } catch(error) {
            console.log("Cannot get all documents in collection: ", error.message)
            throw error
        }
    }
    
}

const blogServices = new BlogServices()
export default blogServices