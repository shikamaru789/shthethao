import { IPost } from "@/interface";
import Link from "next/link";

const PostItem = (props: IPost) => {
  return (
    <Link href={`${props?.url}`}>
      <div className="post-item-warpper w-full h-full p-3 rounded-lg">
        <div className="post-item-inside">
          <div className="post-item-image">
            <img src={props.image} className="rounded-lg w-full h-full" />
          </div>
          <div className="post-item-content mt-2">
            <p className="post-item-content-title font-bold">{props.title}</p>
            <p className="post-item-content-description mt-2">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
