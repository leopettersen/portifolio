import { supabase } from './supabase';

import type { GuestbookMessage } from '../types';

export const PAGE_SIZE = 20;

export async function fetchMessages(lastId?: number): Promise<GuestbookMessage[]> {
    let query = supabase
        .from('guestbook_messages')
        .select('*')
        .order('id', { ascending: false })
        .limit(PAGE_SIZE);

    if (lastId) {
        query = query.lt('id', lastId);
    }

    const { data, error } = await query;

    if (error) {
        throw error;
    }

    return data as GuestbookMessage[];
}

export async function addMessage(name: string, message: string): Promise<GuestbookMessage> {
    const { data, error } = await supabase
        .from('guestbook_messages')
        .insert({
            name: name.trim(),
            message: message.trim(),
        })
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data as GuestbookMessage;
}