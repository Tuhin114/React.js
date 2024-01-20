import VideosContext from "../components/context/VideosContext";
const { useContext } = require("react");

function useVideo() {
  return useContext(VideosContext);
}

export default useVideo;
