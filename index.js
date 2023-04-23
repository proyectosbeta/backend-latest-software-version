const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cron = require("node-cron");
const { TOKEN_GITHUB } = require("./app/config/global");
const software = require("./software");

const app = express();
const port = 3000;

const getLatestVersion = async (repo) => {
  try {
    const [tagResponse, changelogResponse] = await Promise.all([
      axios.get(`https://api.github.com/repos/${repo}/tags`, {
        headers: { Authorization: `token ${TOKEN_GITHUB}` },
      }),
      axios.get(`https://github.com/${repo}/releases/latest`),
    ]);
    const latestTag = tagResponse.data[0].name;
    const $ = cheerio.load(changelogResponse.data);
    const latestVersion = {
      version: latestTag,
      releaseDate: $("relative-time").attr("datetime"),
      changes: $(".markdown-body li")
        .map((i, elem) => $(elem).text().trim())
        .get(),
    };
    return latestVersion;
  } catch (error) {
    console.error(error);
  }
};

const createVersionEndpoint = ({ name, repo, endpoint }) => {
  app.get(`/api/${endpoint}`, async (req, res) => {
    const latestVersion = await getLatestVersion(repo);
    res.json({ name, latestVersion });
  });
};

software.forEach((software) => {
  createVersionEndpoint(software);

  cron.schedule("0 0 * * *", async () => {
    const latestVersion = await getLatestVersion(software.repo);
    console.log(
      `The latest version of ${software.name} is ${latestVersion.version} (${latestVersion.releaseDate})`
    );
    // Send a notification or perform another action based on the latest version obtained
  });
});

app.listen(port, () => {
  console.log(`Version tracking REST API started on port ${port}`);
});
