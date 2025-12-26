export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      "Lista de Convidados": {
        Row: {
          "Confirma��o": string | null
          "Confirma��o_1": string | null
          "Confirma��o_10": string | null
          "Confirma��o_11": string | null
          "Confirma��o_12": string | null
          "Confirma��o_13": string | null
          "Confirma��o_14": string | null
          "Confirma��o_15": string | null
          "Confirma��o_16": string | null
          "Confirma��o_17": string | null
          "Confirma��o_18": string | null
          "Confirma��o_19": string | null
          "Confirma��o_2": string | null
          "Confirma��o_20": string | null
          "Confirma��o_21": string | null
          "Confirma��o_22": string | null
          "Confirma��o_23": string | null
          "Confirma��o_24": string | null
          "Confirma��o_25": string | null
          "Confirma��o_26": string | null
          "Confirma��o_27": string | null
          "Confirma��o_28": string | null
          "Confirma��o_3": string | null
          "Confirma��o_4": string | null
          "Confirma��o_5": string | null
          "Confirma��o_6": string | null
          "Confirma��o_7": string | null
          "Confirma��o_8": string | null
          "Confirma��o_9": string | null
          "Familia tia Maria": string | null
          "Familia tia Miriam": string | null
          "Fam�la Paulo": string | null
          "Fam�lia Adriana": string | null
          "Fam�lia Ana Julia": string | null
          "Fam�lia Angela": string | null
          "Fam�lia Auric�lia": string | null
          "Fam�lia Breno": string | null
          "Fam�lia Diana": string | null
          "Fam�lia Edna": string | null
          "Fam�lia Elaine": string | null
          "Fam�lia Eliene": string | null
          "Fam�lia Fl�via": string | null
          "Fam�lia F�tima": string
          "Fam�lia Geovanna B.": string | null
          "Fam�lia Geovanna G.": string | null
          "Fam�lia Gustavo": string | null
          "Fam�lia J�nio": string | null
          "Fam�lia Paula": string | null
          "Fam�lia Ricardo": string | null
          "Fam�lia Silvana": string | null
          "Fam�lia Tauane": string | null
          "Fam�lia Thamires": string | null
          "Fam�lia tia Eliana": string | null
          "Fam�lia tia Elisangela": string | null
          "Fam�lia tia Letinha": string | null
          "Fam�lia tia Neu�a": string | null
          "Fam�lia tia Selma": string | null
          "Fam�lia tia Tereza": string | null
        }
        Insert: {
          "Confirma��o"?: string | null
          "Confirma��o_1"?: string | null
          "Confirma��o_10"?: string | null
          "Confirma��o_11"?: string | null
          "Confirma��o_12"?: string | null
          "Confirma��o_13"?: string | null
          "Confirma��o_14"?: string | null
          "Confirma��o_15"?: string | null
          "Confirma��o_16"?: string | null
          "Confirma��o_17"?: string | null
          "Confirma��o_18"?: string | null
          "Confirma��o_19"?: string | null
          "Confirma��o_2"?: string | null
          "Confirma��o_20"?: string | null
          "Confirma��o_21"?: string | null
          "Confirma��o_22"?: string | null
          "Confirma��o_23"?: string | null
          "Confirma��o_24"?: string | null
          "Confirma��o_25"?: string | null
          "Confirma��o_26"?: string | null
          "Confirma��o_27"?: string | null
          "Confirma��o_28"?: string | null
          "Confirma��o_3"?: string | null
          "Confirma��o_4"?: string | null
          "Confirma��o_5"?: string | null
          "Confirma��o_6"?: string | null
          "Confirma��o_7"?: string | null
          "Confirma��o_8"?: string | null
          "Confirma��o_9"?: string | null
          "Familia tia Maria"?: string | null
          "Familia tia Miriam"?: string | null
          "Fam�la Paulo"?: string | null
          "Fam�lia Adriana"?: string | null
          "Fam�lia Ana Julia"?: string | null
          "Fam�lia Angela"?: string | null
          "Fam�lia Auric�lia"?: string | null
          "Fam�lia Breno"?: string | null
          "Fam�lia Diana"?: string | null
          "Fam�lia Edna"?: string | null
          "Fam�lia Elaine"?: string | null
          "Fam�lia Eliene"?: string | null
          "Fam�lia Fl�via"?: string | null
          "Fam�lia F�tima": string
          "Fam�lia Geovanna B."?: string | null
          "Fam�lia Geovanna G."?: string | null
          "Fam�lia Gustavo"?: string | null
          "Fam�lia J�nio"?: string | null
          "Fam�lia Paula"?: string | null
          "Fam�lia Ricardo"?: string | null
          "Fam�lia Silvana"?: string | null
          "Fam�lia Tauane"?: string | null
          "Fam�lia Thamires"?: string | null
          "Fam�lia tia Eliana"?: string | null
          "Fam�lia tia Elisangela"?: string | null
          "Fam�lia tia Letinha"?: string | null
          "Fam�lia tia Neu�a"?: string | null
          "Fam�lia tia Selma"?: string | null
          "Fam�lia tia Tereza"?: string | null
        }
        Update: {
          "Confirma��o"?: string | null
          "Confirma��o_1"?: string | null
          "Confirma��o_10"?: string | null
          "Confirma��o_11"?: string | null
          "Confirma��o_12"?: string | null
          "Confirma��o_13"?: string | null
          "Confirma��o_14"?: string | null
          "Confirma��o_15"?: string | null
          "Confirma��o_16"?: string | null
          "Confirma��o_17"?: string | null
          "Confirma��o_18"?: string | null
          "Confirma��o_19"?: string | null
          "Confirma��o_2"?: string | null
          "Confirma��o_20"?: string | null
          "Confirma��o_21"?: string | null
          "Confirma��o_22"?: string | null
          "Confirma��o_23"?: string | null
          "Confirma��o_24"?: string | null
          "Confirma��o_25"?: string | null
          "Confirma��o_26"?: string | null
          "Confirma��o_27"?: string | null
          "Confirma��o_28"?: string | null
          "Confirma��o_3"?: string | null
          "Confirma��o_4"?: string | null
          "Confirma��o_5"?: string | null
          "Confirma��o_6"?: string | null
          "Confirma��o_7"?: string | null
          "Confirma��o_8"?: string | null
          "Confirma��o_9"?: string | null
          "Familia tia Maria"?: string | null
          "Familia tia Miriam"?: string | null
          "Fam�la Paulo"?: string | null
          "Fam�lia Adriana"?: string | null
          "Fam�lia Ana Julia"?: string | null
          "Fam�lia Angela"?: string | null
          "Fam�lia Auric�lia"?: string | null
          "Fam�lia Breno"?: string | null
          "Fam�lia Diana"?: string | null
          "Fam�lia Edna"?: string | null
          "Fam�lia Elaine"?: string | null
          "Fam�lia Eliene"?: string | null
          "Fam�lia Fl�via"?: string | null
          "Fam�lia F�tima"?: string
          "Fam�lia Geovanna B."?: string | null
          "Fam�lia Geovanna G."?: string | null
          "Fam�lia Gustavo"?: string | null
          "Fam�lia J�nio"?: string | null
          "Fam�lia Paula"?: string | null
          "Fam�lia Ricardo"?: string | null
          "Fam�lia Silvana"?: string | null
          "Fam�lia Tauane"?: string | null
          "Fam�lia Thamires"?: string | null
          "Fam�lia tia Eliana"?: string | null
          "Fam�lia tia Elisangela"?: string | null
          "Fam�lia tia Letinha"?: string | null
          "Fam�lia tia Neu�a"?: string | null
          "Fam�lia tia Selma"?: string | null
          "Fam�lia tia Tereza"?: string | null
        }
        Relationships: []
      }
      rsvp_confirmations: {
        Row: {
          attending: boolean
          created_at: string
          email: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          attending: boolean
          created_at?: string
          email: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          attending?: boolean
          created_at?: string
          email?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
<<<<<<< HEAD
=======
      family_rsvp: {
        Row: {
          id: string
          family_name: string
          member_name: string
          attending: boolean
          responder_name: string | null
          responder_contact: string | null
          created_at: string
        }
        Insert: {
          id?: string
          family_name: string
          member_name: string
          attending: boolean
          responder_name?: string | null
          responder_contact?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          family_name?: string
          member_name?: string
          attending?: boolean
          responder_name?: string | null
          responder_contact?: string | null
          created_at?: string
        }
        Relationships: []
      }
>>>>>>> 15f3aad (Site de casamento Giovana & Bruno)
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
