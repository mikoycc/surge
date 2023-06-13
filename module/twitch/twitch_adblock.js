let body = $response.body;
try {
  let response = JSON.parse(body);
  if (
    response &&
    response.ad_block_enabled !== undefined &&
    response.ad_block_enabled === true
  ) {
    response.ad_block_enabled = false;
    response.ads = [];
    response.commercial_break = {};
    response.privileged = [];
    body = JSON.stringify(response);
  }
} catch (error) {
  console.log(`Twitch adblock script error: ${error}`);
}
$done({ body });
