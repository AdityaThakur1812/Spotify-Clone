import { useContext } from "react";
import AudioContext from "../context/AudioContext";

function useAudio(){
    const context = useContext(AudioContext);
    if (!context) {
    throw new Error(
      "useAudio must be used inside AudioProvider"
    );
  }

return context;

}

export default useAudio;