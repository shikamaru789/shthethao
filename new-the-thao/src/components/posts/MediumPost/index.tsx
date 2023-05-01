import { IPost } from "@/interface";
import Link from "next/link";

const MediumPost = (props: IPost) => {
  return (
    <div className="medium-post">
      <Link href={`${props?.url}`}>
        <div className="medium-post-wrapper rounded-xl flex gap-2">
          <div className="medium-post-image flex-1">
            <img src={props.image} className="w-full rounded-xl" />
          </div>
          <div className="medium-post-content flex-1 w-40">
            <p className="medium-post-title truncate text-ellipsis font-bold">
              {props.title}
            </p>
            <p className="medium-post-description mt-2">{props.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MediumPost;
