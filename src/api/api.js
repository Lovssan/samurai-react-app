import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY':'ec67c45e-7fa3-461e-977e-8cdfad9ffc8a'
    }
})
export const usersAPI={
    getUsers:(currentPage=1,pageSize=10)=>{
        return instance
               .get(`users?page=${currentPage}&count=${pageSize}`)
               .then(res=>res.data)
    },
    unfollowUser : (userId)=>{
    return instance
            .delete(`follow/${userId}`)
            .then(res=>res.data)
    },
    followUser : (userId)=>{
    return instance
            .post(`follow/${userId}`,{})
            .then(res=>res.data)
    }
}
export const profileAPI={
    getUserProfile : (userId)=>{
        return instance
                .get(`profile/${userId}`)
                .then(res=>res.data)
    },
    getStatus: (userId)=>{
        return instance
        .get(`profile/status/${userId}`)
    },
    updateStatus: (status)=>{
        return instance
        .put(`profile/status`,{status})
    }
}

export const authAPI={
    isAuthUserData : (userId)=>{
        return  instance.get(`auth/me`).then(res=>res.data)
    },
    loginUserData : (email, password, rememberMe=false)=>{
        return  instance.post(`auth/login`,{email, password, rememberMe})
    },
    logoutUserData : ()=>{
        return  instance.delete(`auth/login`)
    }
}


