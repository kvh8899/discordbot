import { getDiscordBotMessageBody } from "./utils/messaging.js";
import { discordApi, discordWebhookUrl } from "./constants/messaging.js";
import { getPollData } from "./utils/polls.js";

async function sendTestMessage(message) {
  const res = await fetch(`${discordApi}${discordWebhookUrl}`);
  const webHookProps = await res.json();

  const { url: webHookUrl } = webHookProps;

  const webHookRes = await fetch(webHookUrl, {
    method: "POST",
    body: getDiscordBotMessageBody(
      message,
      getPollData("./polldata/resources.json")
    ),
  });

  console.log(await webHookRes.json());
}

sendTestMessage("This is a test poll agane");
