import axios from "axios";
import { API_KEOVIP, FRAME_ISPORT, URL_AMINATION } from "../../config/config";
import MainLayout from "@/Layout/MainLayout";

const LiveStreamMatchDetail = ({ match }: any) => {
  return (
    <MainLayout>
       <div className="stream-title title-seagame-schedule-page">
          Trực tiếp trận
        </div>
      <div className="live-stream-match-detail">
        <iframe
          style={{ height: "40vw", width: "100%" }}
          src={`${FRAME_ISPORT}&uuid=${match?.thesports_uuid}`}
        />

        <div className="match-amination">
          <iframe
            src={`${URL_AMINATION}?matchId=${match?.thesports_uuid}&accessKey=tEFL6ClbFnfkvmEn0xspIVQyPV9jAz9u&lang=vi`}
            width="800"
            height="700"
          ></iframe>
        
        </div>
      </div>
    </MainLayout>

  );
};

export default LiveStreamMatchDetail;

export async function getServerSideProps(ctx: any) {
  const matchId = ctx.params.id;
  const theSportLiveMatch = await axios.get(`${API_KEOVIP}/website/thesports`);
  const findMatch = theSportLiveMatch.data?.data?.find(
    (x: any) => x.match_id == matchId
  );

  return {
    props: {
      match: findMatch || {},
    },
  };
}
