import {FaFire, FaPoo} from 'react-icons/fa'
import {BsPlus, BsFillLightningFill} from 'react-icons/bs'

const SideBars = ()=>{
    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0
         flex flex-col bg-gray-900 text-white shadow z-30">
            <SideBarIcon icon = {<FaFire size="28"/>}/>
            <div className="w-9 h-0.5 bg-gray-600 
            ml-auto mr-auto"/>
            <SideBarIcon icon = {<BsPlus size="28"/>}/>
            <SideBarIcon icon = {<BsFillLightningFill size="28"/>}/>
            <SideBarIcon icon = {<FaPoo size="28"/>}/>
        </div>
        
    );
};

const SideBarIcon = ({icon, text='tooltip'})=>(
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
        <div className="absolute -left-3 w-2 h-2 bg-white group-hover:scale-y-[3] 
        transition-all duration-300 ease-in-out
        rounded-sm"/>
    </div>
);
export default SideBars;