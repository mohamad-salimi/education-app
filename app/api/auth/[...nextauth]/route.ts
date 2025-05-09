import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import { verifyPassword } from "@/utils/auth";
import { connectDB } from "@/utils/connectDB";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";

export const authOption: AuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Authentication information not sent");
        }

        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (err) {
          console.log("Database connection error:", err);
          throw new Error("An Error Occurred In Server");
        }

        if (!email || !password) {
          throw new Error("Please enter valid information.");
        }

        const user = await User.findOne({ email });

        if (!user) throw new Error("Please create an account first");

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) throw new Error("Email or password is incorrect");

        return {
          id: user._id.toString(),
          name: user.fullname,
          email: user.email,
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: {
    signIn: "/",
    signOut: "/signout",
    error: "/error",
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
