import { PostItemProps } from "@/interface"
import RelativePostItem from "./RelativePostItem"
import {useState} from "react"
const RelativePost = ({listPost}:{listPost:PostItemProps[]}) =>{


    return <div className="relative-post">
        <div className="relative-title">
            Có thể bạn quan tâm
        </div>
        {listPost?.map((item:PostItemProps) =>{
            return <RelativePostItem post={item}/>
        })}
    </div>
}

export default RelativePost