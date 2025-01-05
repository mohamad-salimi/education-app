import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import { verifyPassword } from "@/utils/auth";
import { connectDB } from "@/utils/connectDB";
import CredentialsProvider from "next-auth/providers/credentials";
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
          throw new Error("اطلاعات احراز هویت ارسال نشده است");
        }

        const { email, password } = credentials;

        try {
          await connectDB;
        } catch (err) {
          console.log("Database connection error:", err);
          throw new Error('مشکلی در سرور رخ داده است"');
        }

        if (!email || !password) {
          throw new Error("لطفا اطلاعات معتبر وارد کنید");
        }

        const user = await User.findOne({ email });

        if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");

        return { id: user._id.toString(), name: user.name, email: user.email };
      },
    }),
  ],
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
