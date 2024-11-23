export const appwriteConfig = {
    endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
    userCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USER_COLLECTION!,
    fileCollrctionId: process.env.NEXT_PUBLIC_APPWRITE_FILE_COLLECTION!,
    bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
    secretKey: process.env.NEXT_PUBLIC_SECRET!
}