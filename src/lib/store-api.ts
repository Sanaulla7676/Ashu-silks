import { supabase } from './supabase';
import type { Database, TablesInsert, TablesUpdate } from './supabase-types';

export async function getActiveProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('status', 'active')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function getOwnerProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function saveProduct(input: TablesInsert<'products'>, id?: string) {
  const payload: TablesUpdate<'products'> = { ...input, updated_at: new Date().toISOString() };
  const query = id
    ? supabase.from('products').update(payload).eq('id', id)
    : supabase.from('products').insert(input);
  const { data, error } = await query.select().single();
  if (error) throw error;
  return data;
}

export async function deleteProduct(id: string) {
  const { error } = await supabase.from('products').delete().eq('id', id);
  if (error) throw error;
}

export async function getCategories() {
  const { data, error } = await supabase.from('categories').select('*').order('sort_order');
  if (error) throw error;
  return data;
}

export async function getOwnerProfile() {
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return null;
  const { data, error } = await supabase.from('profiles').select('*').eq('id', auth.user.id).single();
  if (error) throw error;
  return data;
}

export async function signInWithPassword(email: string, password: string) {
  const result = await supabase.auth.signInWithPassword({ email, password });
  if (result.error) throw result.error;
  return result.data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getDashboardSnapshot() {
  const [{ count: products }, { count: orders }, { count: customers }, lowStock] = await Promise.all([
    supabase.from('products').select('*', { count: 'exact', head: true }),
    supabase.from('orders').select('*', { count: 'exact', head: true }),
    supabase.from('customers').select('*', { count: 'exact', head: true }),
    supabase.from('products').select('*').lte('stock', 5).eq('status', 'active').order('stock').limit(5),
  ]);
  return { products: products ?? 0, orders: orders ?? 0, customers: customers ?? 0, lowStock: lowStock.data ?? [] };
}

export type ProductRow = Database['public']['Tables']['products']['Row'];