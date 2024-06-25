import NextAuth from "next-auth";
import ProviderObject from "@/app/auth/ProviderObjext";

const handler = NextAuth(ProviderObject);

export { handler as GET, handler as POST };
