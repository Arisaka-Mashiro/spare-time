// import { SupabaseUserAdapter } from "@/adapter/user-adapter";
import NextAuth from "next-auth"
import NaverProvider from "next-auth/providers/naver"

export const authOptions = {
  debug: true,
  // Configure one or more authentication providers
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID ?? '',
      clientSecret: process.env.NAVER_CLIENT_SECRET ?? '',
    })
  ],
  // adapter: SupabaseUserAdapter({
  //   url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  //   secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  // }),
  pages: {
    signIn: '/login',
    error: '/login',
    newUser: '/welcome',
  },
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }