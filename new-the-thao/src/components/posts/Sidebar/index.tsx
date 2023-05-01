import { MatchItemProps, PostItemProps } from "@/interface"
import SidebarPost from "../SidebarPost"

const Sidebar = ({title,listPost}:{title:string,listPost:PostItemProps[]}) =>{
    return <div className="sticky-side-bar">
        <h2 className="sidebar-title">{title}</h2>
        {listPost?.map(item =>{
            return<SidebarPost post={item}/>
        })}
    </div >
}

export default Sidebar