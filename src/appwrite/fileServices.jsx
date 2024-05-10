import { Client, ID, Storage } from "appwrite";
import conf from "../conf/conf";

export class FileServices {
    client = new Client();
    bucket

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.bucket = new Storage(this.client)
    }

    async uploadFile(file) {
        try {
            return this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Error in uploading image: ", error.message)
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Error in deleteing image: ", error.message);
            return false
        }
    }

    async getFilePreview(fileId) {
        const imageUrl = this.bucket.getFilePreview(conf.appwriteBucketId, fileId)
        console.log("Image url: ", imageUrl.href)
        if(imageUrl) {
            return imageUrl.href
        }
        return null
    }
}

const fileServices = new FileServices()
export default fileServices