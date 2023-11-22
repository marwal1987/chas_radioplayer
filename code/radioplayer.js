// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.
// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

const channels = document.getElementById("channels");

async function getchannels() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();

  data.channels.forEach((channel) => {
    const channelEl = document.createElement("div");
    const imgEl = document.createElement("img")
    const h2El = document.createElement("h2") 
    const audioEl = document.createElement("audio")
    
    const bgImg = channel.image
    const liveAudio = channel.liveaudio.url;
    const bgColor = channel.color;
    const chName = channel.name;

    channelEl.style.backgroundColor = `#${bgColor}`

    imgEl.src = `${bgImg}`;
    imgEl.width = 100;

    h2El.innerText = `${chName}`;

    audioEl.innerHTML = `<source src="${liveAudio}" type="audio/mpeg" />`
    audioEl.controls = "true"


    channels.appendChild(channelEl);
    channelEl.appendChild(imgEl);
    channelEl.appendChild(h2El);
    channelEl.appendChild(audioEl);

    console.log(bgColor);
  });
}

getchannels();