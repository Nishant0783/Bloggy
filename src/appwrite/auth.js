import { Account, Client, ID } from 'appwrite';
import conf from './../conf/conf';

export class AuthenticationServices {
    client = new Client()
    account

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async createAccount({fullname, email, password, username, profilePicture}) {
        try {
            const userAccount = await this.account.create( ID.unique(), email, password, username,  fullname, profilePicture )
            // console.log(userAccount);   
            if(userAccount) {
                localStorage.setItem('loginStatus', true)
                return this.loginUser({email, password})
            }else {
                console.log("Error in logging in user just after creation")
                return userAccount
            }
        } catch (err) {
            console.log("Error in creating user: ", err.message)
            throw err
        }
    }

    async loginUser({ email, password }) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password)
            localStorage.setItem('loginStatus', true)
            return session 
        }catch(err) {
            console.log("Error in logging in user: ", err.message)
            throw err
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get() 
        } catch (err) {
            console.log("Error in getting current user: ", err.message)
            throw err
        }
    }

    async logoutUser() {
        try {
            localStorage.setItem('loginStatus', false)
            await this.account.deleteSessions()
        } catch (err) {
            console.log("Error in logging out user: ", err.message)
            throw err
        }
    }
}

const authenticationServices = new AuthenticationServices();
export default authenticationServices;