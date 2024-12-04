export function getDiscordBotMessageBody(content = "", poll) {
  const form = new FormData();
  const formData = { content };
  if (!!poll) {
    formData["poll"] = poll;
  }

  form.append("payload_json", JSON.stringify(formData));
  return form;
}
