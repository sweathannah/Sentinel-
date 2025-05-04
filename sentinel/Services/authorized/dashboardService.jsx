import { supabase } from "../auth/supabaseClient";

export const dashboardRequests = {
    
    // Get user profile
    async userCredentials () {
        const userId = JSON.parse(localStorage.getItem('sb-nggzvtkbaoxtucfcgjfm-auth-token'))
        console.log(userId.user.id)
        try {
                
            const response = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId.user.id)
            .single();
            return response;

        } catch (error) {
            console.log(error.message)
        }
    },
    
}
