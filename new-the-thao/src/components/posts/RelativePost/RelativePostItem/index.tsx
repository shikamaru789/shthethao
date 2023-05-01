import { PostItemProps } from "@/interface"
import moment from "moment"
import Link from "next/link"

const RelativePostItem = ({ post }: { post: PostItemProps }) => {
    return <Link href={post.slug}  className="d-flex mt-5">
        <div className="relative-item">
            <div className="relative-item-image hover:scale-105 overflow-hidden">
                <img src={post.thumb.small} />
            </div>
            <div className="wrap-relative-post-title">
                <div className="relative-post-title">
                    {post.title}

                </div>

                <div className="post-time-left p-2"> {moment(post.createdAt).format("dddd DD/MM/YYYY")}</div>
                <div className="wrap-description">
                    {post.description}
                </div>
            </div>


        </div>
    </Link>
}

export default RelativePostItem