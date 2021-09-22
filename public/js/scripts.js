// Empty JS for your own code to be here
const axios = require(`axios`);
window.onSpotifyWebPlaybackSDKReady = () => {
  const token = localStorage.getItem("access_token");
  const player = new Spotify.Player({
    name: "Music Live Room",
    getOAuthToken: (cb) => {
      cb(token);
    },
    volume: 0.5,
  });
  player.addListener("ready", async ({ device_id }) => {
    console.log("Ready with Device ID", device_id);
    localStorage.setItem("device_id", device_id);
    try {
      const token = localStorage.getItem("access_token");
      const device_id = localStorage.getItem("device_id");
      const resp = await axios({
        url: `https://api.spotify.com/v1/me/player`,
        method: `put`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: { device_ids: [`${device_id}`] },
      });
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  });
  player.addListener("not_ready", ({ device_id }) => {
    console.log("Device ID has gone offline", device_id);
  });
  player.addListener("initialization_error", ({ message }) => {
    console.error(message);
  });

  player.addListener("authentication_error", ({ message }) => {
    console.error(message);
  });

  player.addListener("account_error", ({ message }) => {
    console.error(message);
  });
  player.connect();
};
