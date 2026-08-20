export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: { id:string; name:string; slug:string; description:string|null; sort_order:number; is_active:boolean; created_at:string; updated_at:string };
        Insert: { id?:string; name:string; slug:string; description?:string|null; sort_order?:number; is_active?:boolean; created_at?:string; updated_at?:string };
        Update: { id?:string; name?:string; slug?:string; description?:string|null; sort_order?:number; is_active?:boolean; created_at?:string; updated_at?:string };
        Relationships: [];
      };
      products: {
        Row: { id:string; category_id:string|null; name:string; slug:string; description:string|null; fabric:string|null; color:string|null; sku:string; price:number; compare_at_price:number|null; stock:number; status:string; is_featured:boolean; image_url:string|null; created_at:string; updated_at:string };
        Insert: { id?:string; category_id?:string|null; name:string; slug:string; description?:string|null; fabric?:string|null; color?:string|null; sku:string; price:number; compare_at_price?:number|null; stock?:number; status?:string; is_featured?:boolean; image_url?:string|null; created_at?:string; updated_at?:string };
        Update: { id?:string; category_id?:string|null; name?:string; slug?:string; description?:string|null; fabric?:string|null; color?:string|null; sku?:string; price?:number; compare_at_price?:number|null; stock?:number; status?:string; is_featured?:boolean; image_url?:string|null; created_at?:string; updated_at?:string };
        Relationships: [];
      };
      profiles: {
        Row: { id:string; full_name:string|null; avatar_url:string|null; role:string; created_at:string; updated_at:string };
        Insert: { id:string; full_name?:string|null; avatar_url?:string|null; role?:string; created_at?:string; updated_at?:string };
        Update: { id?:string; full_name?:string|null; avatar_url?:string|null; role?:string; created_at?:string; updated_at?:string };
        Relationships: [];
      };
      customers: {
        Row: { id:string; auth_user_id:string|null; full_name:string; email:string|null; phone:string|null; total_orders:number; total_spent:number; created_at:string; updated_at:string };
        Insert: { id?:string; auth_user_id?:string|null; full_name:string; email?:string|null; phone?:string|null; total_orders?:number; total_spent?:number; created_at?:string; updated_at?:string };
        Update: { id?:string; auth_user_id?:string|null; full_name?:string; email?:string|null; phone?:string|null; total_orders?:number; total_spent?:number; created_at?:string; updated_at?:string };
        Relationships: [];
      };
      orders: {
        Row: { id:string; order_number:string; customer_id:string|null; status:string; subtotal:number; shipping:number; total:number; notes:string|null; created_at:string; updated_at:string };
        Insert: { id?:string; order_number:string; customer_id?:string|null; status?:string; subtotal?:number; shipping?:number; total?:number; notes?:string|null; created_at?:string; updated_at?:string };
        Update: { id?:string; order_number?:string; customer_id?:string|null; status?:string; subtotal?:number; shipping?:number; total?:number; notes?:string|null; created_at?:string; updated_at?:string };
        Relationships: [];
      };
      order_items: {
        Row: { id:string; order_id:string; product_id:string|null; product_name:string; sku:string|null; quantity:number; unit_price:number; line_total:number };
        Insert: { id?:string; order_id:string; product_id?:string|null; product_name:string; sku?:string|null; quantity:number; unit_price:number; line_total:number };
        Update: { id?:string; order_id?:string; product_id?:string|null; product_name?:string; sku?:string|null; quantity?:number; unit_price?:number; line_total?:number };
        Relationships: [];
      };
      store_settings: {
        Row: { id:string; key:string; value:Json; updated_at:string };
        Insert: { id?:string; key:string; value?:Json; updated_at?:string };
        Update: { id?:string; key?:string; value?:Json; updated_at?:string };
        Relationships: [];
      };
    };
    Views: {};
    Functions: { is_owner: { Args: Record<string, never>; Returns: boolean } };
    Enums: {};
    CompositeTypes: {};
  };
};