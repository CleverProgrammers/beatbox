import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Howl, Howler } from "howler";
import Bubble from "./audioclips/bubbleblip.mp3";
import EvilLaugh from "./audioclips/evillaugh.mp3";
import MagicalTwinkle from "./audioclips/magicaltwinkle.mp3";
import MaleVoiceClip119 from "./audioclips/malevoiceclip119.mp3";
import MaleVoiceClip123 from "./audioclips/malevoiceclip123.mp3";
import ReverseSwipe from "./audioclips/reverseswipe.mp3";
import Rewind from "./audioclips/rewind.mp3";
import Rise from "./audioclips/rise.mp3";
import TrumpetSad from "./audioclips/trumpetsad.mp3";

const audioClips = [
  { src: Bubble, label: 'Bubble', key: 'Q'}, 
  { src: EvilLaugh, label: 'HahHAH', key: 'W'}, 
  { src: MagicalTwinkle, label: 'Twinkle', key: 'E'},
  { src: MaleVoiceClip119, label: 'WhoohOO', key: 'A'},
  { src: MaleVoiceClip123, label: 'HEY!', key: 'S'}, 
  { src: ReverseSwipe, label: 'Swipe', key: 'D'}, 
  { src: Rewind, label: 'Rewind', key: 'Z'}, 
  { src: Rise, label: 'Rise', key: 'X'}, 
  { src: TrumpetSad, label: 'Sad', key: 'C'}, 
];

function App() {
  const [label, setLabel] = useState('Press a key');

  const playSound = (soundTrack, label) => {
    let sound = new Howl({
      src: [soundTrack]
    });
    sound.play();
  }

  return (
    <Wrapper>
      <Drumkit>
        <Display>{label}</Display>
        <Keys>
          { audioClips.map((soundObj) => {
            let soundKey = soundObj.key;
            let label = soundObj.label;
            let soundTrack = soundObj.src;
            
            return <Key onClick={()=> playSound(soundTrack, label)}>{soundKey}</Key>
          })}
        </Keys>
      </Drumkit>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ebf5fc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pattaya", sans-serif;
  color: #000f30;
`;

const Drumkit = styled.div`
  width: 375px;
  height: 500px;
  border-radius: 21px;
  background: #ebf5fc;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
              3px 3px 5px rgba(0, 0, 0, 0.1);
  display: flex; 
  flex-direction: column;
}`;

const Display = styled.div`
  flex: 25%;
  margin: 30px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
    3px 3px 5px rgba(0, 0, 0, 0.1);
  color: #8895b3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 36px;
  font-family: "Roboto", sans-serif;
`;

const Keys = styled.div`
  margin: 10px;
  box-sizing: border-box;
  flex: 75%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Key = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 8px;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
    3px 3px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8895b3;
  font-weight: 400;
  font-size: 24px;
  font-family: "Roboto", sans-serif;

  &:hover {
    background-color: aquamarine;
  }
`;
