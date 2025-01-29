import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

const authConfig = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            if (user && user.email) {
                try {
                    const response = await axios.post('http://localhost:5000/check-user', {
                        email: user.email
                    });

                    const userData = response.data;
                    if (userData.exists) {
                        user.id = userData.id;
                        user.name = userData.name;
                        user.surname = userData.surname;
                        user.birthDate = userData.birthDate;
                        user.profilePicture = userData.profilePicture;
                        user.socialLinks = userData.socialLinks;
                        user.status = userData.status;
                        user.userStatus = userData.userStatus;
                        user.description = userData.description;
                        user.stacks = userData.stacks;
                        user.skills = userData.skills;
                        user.projects = userData.projects;
                        return true;
                    } else {
                        return '/complete-profile';
                    }

                } catch (error) {
                    console.error('Ошибка при отправке запроса на бэкенд:', error);
                    return true;
                }
            }
            return true;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.name = token.name as string;
                session.user.surname = token.surname as string;
                session.user.birthDate = token.birthDate as string;
                session.user.profilePicture = token.profilePicture as string;
                session.user.socialLinks = token.socialLinks as object;
                session.user.status = token.status as string;
                session.user.userStatus = token.userStatus as string;
                session.user.description = token.description as string;
                session.user.stacks = token.stacks as string[];
                session.user.skills = token.skills as string[];
                session.user.projects = token.projects as object[];
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.surname = user.surname;
                token.birthDate = user.birthDate;
                token.profilePicture = user.profilePicture;
                token.socialLinks = user.socialLinks;
                token.status = user.status;
                token.userStatus = user.userStatus;
                token.description = user.description;
                token.stacks = user.stacks;
                token.skills = user.skills;
                token.projects = user.projects;
            }
            return token;
        }

    },
    pages: {
        signIn: '/board',
        signOut: '/',
        error: '/not-found',
    },
};

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
