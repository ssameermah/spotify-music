export const initialState = {
    user: null,
    playlists : [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    //token : "BQDehn2f9m4BlZW1zZw_0HJKSqdCOIOwp376pK56ZpUB2S-SB7…l7_-hJ-QD9tn2vdkqpuv-FFin3NYQiPVoklHLsdsQfm5_zgnM",

};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };


        default:
            return state;

    }
};

export default reducer;