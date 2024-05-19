// import { Database } from "@/database.types"
// import { createClient } from "@supabase/supabase-js"
// import {
//   Adapter,
//   AdapterSession,
//   AdapterUser,
//   VerificationToken,
// } from "next-auth/adapters"

// function isDate(date: any) {
//   return (
//     new Date(date).toString() !== "Invalid Date" && !isNaN(Date.parse(date))
//   )
// }

// export function format<T>(obj: Record<string, any>): T {
//   for (const [key, value] of Object.entries(obj)) {
//     if (value === null) {
//       delete obj[key]
//     }

//     if (isDate(value)) {
//       obj[key] = new Date(value)
//     }
//   }

//   return obj as T
// }

// /**
//  * This is the interface of the Supabase adapter options.
//  **/
// export interface SupabaseAdapterOptions {
//   /**
//    * The URL of your Supabase database
//    **/
//   url: string
//   /**
//    * The secret to grant access to the database
//    **/
//   secret: string
// }

// export function SupabaseUserAdapter(options: SupabaseAdapterOptions): Adapter {
//   const { url, secret } = options
//   const supabase = createClient<Database, "public">(url, secret, {
//     db: { schema: "public" },
//     global: { headers: { "X-Client-Info": "@auth/supabase-adapter" } },
//     auth: { persistSession: false },
//   })
//   return {
//     async createUser(user) {
//       const { data, error } = await supabase
//         .from("user")
//         .insert({
//           ...user,
//           emailVerified: user.emailVerified?.toISOString(),
//         })
//         .select()
//         .single()

//       if (error) throw error

//       return format<AdapterUser>(data)
//     },
//     async getUser(id) {
//       const { data, error } = await supabase
//         .from("user")
//         .select()
//         .eq("id", id)
//         .maybeSingle()

//       if (error) throw error
//       if (!data) return null

//       return format<AdapterUser>(data)
//     },
//     async getUserByEmail(email) {
//       const { data, error } = await supabase
//         .from("user")
//         .select()
//         .eq("email", email)
//         .maybeSingle()

//       if (error) throw error
//       if (!data) return null

//       return format<AdapterUser>(data)
//     },
//     async getUserByAccount({ providerAccountId, provider }) {
//       const { data, error } = await supabase
//         .from("accounts")
//         .select("users (*)")
//         .match({ provider, providerAccountId })
//         .maybeSingle()

//       if (error) throw error
//       if (!data || !data.users) return null

//       return format<AdapterUser>(data.users)
//     },
//     async updateUser(user) {
//       const { data, error } = await supabase
//         .from("user")
//         .update({
//           ...user,
//           emailVerified: user.emailVerified?.toISOString(),
//         })
//         .eq("id", user.id)
//         .select()
//         .single()

//       if (error) throw error

//       return format<AdapterUser>(data)
//     },
//     async deleteUser(userId) {
//       const { error } = await supabase.from("user").delete().eq("id", userId)

//       if (error) throw error
//     },
//     async linkAccount(account) {
//       const { error } = await supabase.from("accounts").insert(account)

//       if (error) throw error
//     },
//   }
// }