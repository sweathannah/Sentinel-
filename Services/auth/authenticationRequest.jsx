import { supabase } from "./supabaseClient";

export const authRequests = {

    // sign up 
    async signUpWithPhone (phoneNumber) {
        const { data, error } = await supabase.auth.signInWithOtp({
            phone: phoneNumber
        });
        if(error) {
            console.log('Error sending OTP:', error.message)
        } else {
            console.log('OTP sent!', data)
        }
    },

    // sign up verification
    async verifyOtp (phoneNumber, token) {
        const { data, error } = await supabase.auth.verifyOtp({
            phone: phoneNumber,
            token: token,
            type: 'sms'
        });
        if(error) {
            console.log('Error verifying OTP:', error.message)
        } else {
            console.log('User signed in!', data)
        }
    },
    
    // User onboarding
    async userOnboarding (data) {
        const { dataDestr, error } = await supabase.auth.verifyOtp({
            phone: data?.phoneNumber,
            token: data?.token,
            type: 'sms'
        });
        if(error) {
            console.log('Error verifying OTP:', error.message)
        } else {
            console.log('User signed in!', dataDestr)
        }
    },
    
    // alt signup with email 
    async signupWithEmail (email) {
        console.log(email)
        try {
                
            const request = await supabase.auth.signInWithOtp({
                email: email,
            })
            return request;

        } catch (error) {
            console.log(error.message)
        }
    },
    
    // alt verify otp
    async verifyEmailOTP (data) {
        console.log(data.email)
        try {
            
            const request = await supabase.auth.verifyOtp({
                email: data?.email,
                token: data?.otpCode,
                type: 'email',
            })
            
            return request;

        } catch (error) {
            console.log(error.message)
        }
        
    },
    
    // set/create users profile 
    async setProfile (data) {
        const userId = JSON.parse(localStorage.getItem('sb-nggzvtkbaoxtucfcgjfm-auth-token'))
        console.log(userId.user.id)
        const userProfile = await supabase.from('profiles').insert([
            {
                id: userId.user.id,
                first_name: data?.first_name,
                last_name: data?.last_name,
                password: data?.password,
                user_type: data?.user_type,
                created_at: new Date(),
            }
        ]);
        return userProfile;
    },
    
    // alt signin with email 
    async signInWithEmail (data) {
        const { error } = await supabase.auth.signInWithPassword({
            email: data.email,
        });

        if(error) {
            console.log('Error verifying OTP:', error.message)
            return;
        } 
        
        console.log('OTP sent to users email')
    },


    // alt signup with Google oAuth 
    async signInWithGoogleOAuth () {
        console.log('loading')
        const response = await supabase.auth.signInWithOAuth({
            provider: 'google'
        });
        return response;
    },

    
    // alt signup with email 
    async guestReport (data) {
        const { error } = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        });

        if(error) {
            console.log('Error verifying OTP:', error.message)
            return;
        } 
        
        console.log('User signed up and profile created')
    },
}
