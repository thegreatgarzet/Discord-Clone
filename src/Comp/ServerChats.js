

const chat_list = ["GLOBAL", "BR", "USA"];

const ServerChats = ()=>{
    
    return(
       <div className="fixed mt-[10vh] flex flex-col">
           {chat_list.map((chat_name)=><ServerChat text = {chat_name}/>)}
       </div>
    );
};

const ServerChat = ({text="Text"})=>{
    return(
        <div className="relative flex 
        w-56 ml-4 mt-2 rounded-md font-roboto font-extrabold text-left text-xl
         text-gray-500 hover:bg-gray-700 hover:text-gray-200">
            <span className="ml-4 "># {text}</span>
        </div>
    );
}

export default ServerChats;