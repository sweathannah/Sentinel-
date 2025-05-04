import { supabase } from "../auth/supabaseClient";

export const dashboardRequests = {
    
    // Get user profile
    async userCredentials () {
        // const userId = JSON.parse(localStorage.getItem('sb-nggzvtkbaoxtucfcgjfm-auth-token'))
        // console.log(userId.user.id)
        try {
            const userResponse = await supabase.auth.getUser();
            console.log(userResponse)
            console.log(userResponse.data.user.id)
            const userDataResponse = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userResponse.data.user.id)
            return userDataResponse;

        } catch (error) {
            console.log(error.message)
        }
    },
    
}
