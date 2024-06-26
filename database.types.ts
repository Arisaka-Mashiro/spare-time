export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      owner: {
        Row: {
          created_at: string
          id: number
          mobile: string | null
          name: string | null
          profile: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          mobile?: string | null
          name?: string | null
          profile?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          mobile?: string | null
          name?: string | null
          profile?: string | null
        }
        Relationships: []
      }
      schedule: {
        Row: {
          created_at: string
          id: number
          store_id: number
          time: string | null
          user_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          store_id: number
          time?: string | null
          user_id: number
        }
        Update: {
          created_at?: string
          id?: number
          store_id?: number
          time?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "schedule_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "store"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      store: {
        Row: {
          address: string | null
          bio: string | null
          created_at: string
          id: number
          name: string | null
          owner_id: number
          phone: string | null
        }
        Insert: {
          address?: string | null
          bio?: string | null
          created_at?: string
          id?: number
          name?: string | null
          owner_id: number
          phone?: string | null
        }
        Update: {
          address?: string | null
          bio?: string | null
          created_at?: string
          id?: number
          name?: string | null
          owner_id?: number
          phone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "store_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "owner"
            referencedColumns: ["id"]
          },
        ]
      }
      store_spare_time: {
        Row: {
          created_at: string
          id: number
          store_id: number
          time: string
        }
        Insert: {
          created_at?: string
          id?: number
          store_id: number
          time: string
        }
        Update: {
          created_at?: string
          id?: number
          store_id?: number
          time?: string
        }
        Relationships: [
          {
            foreignKeyName: "store_spare_time_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "store"
            referencedColumns: ["id"]
          },
        ]
      }
      user: {
        Row: {
          bio: string | null
          created_at: string
          email: string | null
          id: number
          mobile: string | null
          name: string | null
          updated_at: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string
          email?: string | null
          id?: number
          mobile?: string | null
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string
          email?: string | null
          id?: number
          mobile?: string | null
          name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_naver_blog: {
        Row: {
          created_at: string
          id: number
          name: string
          rating: number | null
          today: number | null
          total: number | null
          url: string
          user_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          rating?: number | null
          today?: number | null
          total?: number | null
          url: string
          user_id: number
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          rating?: number | null
          today?: number | null
          total?: number | null
          url?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "user_naver_blog_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
