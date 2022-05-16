import ServerChats from "./ServerChats";

const ServerBar = ()=>{
    return(
        <div className="fixed top-0 left-16 h-screen w-64
        flex flex-col bg-gray-800 shadow-lg z-30">
            <div className="fixed top-0 left-16 h-[8vh] 
            w-64 drop-shadow-lg 
            z-30 bg-gray-800
            ">
                <h2 className="mt-[2vh] ml-[1vw] text-xl font-extrabold font-roboto 
                text-white ">Discord Clone</h2>
            </div>
            <ServerChats/>
        </div>    
    );
};

export default ServerBar;