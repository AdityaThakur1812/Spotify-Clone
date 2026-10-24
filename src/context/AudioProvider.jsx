import { useEffect, useRef, useState } from "react";
import AudioContext from "./AudioContext";

function AudioProvider({ children }) {
  const audioRef = useRef(null);

  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    const audio = new Audio();
    audio.volume = volume;
    audioRef.current = audio;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const playTrack = async (track) => {
    const audio = audioRef.current;
    if (!audio || !track?.audio) {
      console.error("Track audio source is missing: ", track);
      return;
    }
    if (currentTrack?.id !== track.id) {
      audio.pause();
      audio.src = track.audio;
      audio.currentTime = 0;
      setCurrentTrack(track);
      setCurrentTime(0);
    }
    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      setIsPlaying(false);
      console.error("Unable to play audio:", error);
    }
  };
  const togglePlay = async () =>{
    const audio = audioRef.current;
    if(!audio || !currentTrack)return ;
    if(audio.paused){
        try{
            await audio.play();
            setIsPlaying(true);
        }catch(error){
            setIsPlaying(false);
            console.error("Unable to resume audio:", error);
        }
    }else{
        audio.pause();
        setIsPlaying(false);
    }
  }

  const seekTo = (time) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = Math.max(
      0,
      Math.min(time, audio.duration || 0)
    );
    setCurrentTime(audio.currentTime);
  };

  const value = {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    setVolume,
    playTrack,
    togglePlay,
    seekTo,
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
}

export default AudioProvider;

