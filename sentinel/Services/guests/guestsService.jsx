import { supabase } from "../auth/supabaseClient";

export const guestsRequests = {
    
    // Get user profile
    async guestsMessages (data) {
        try {
            const response = await supabase
            .from('guest_messages')
            .insert([{ description: data?.description, location: data?.location }])
            return response;

        } catch (error) {
            console.log(error.message)
        }
    },
    
}
