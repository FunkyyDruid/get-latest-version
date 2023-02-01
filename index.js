const core = require("@actions/core");
const github = require("@actions/github");
const semver = require("semver");

const getLatestVersion = (versions) => {
  return versions.sort(semver.rcompare)[0];
};

try {
  const stringifiedVersions = core.getInput("versions");
  const versions = JSON.parse(stringifiedVersions);
  const latestVersion = getLatestVersion(versions);

  console.log({ versions, latestVersion });
  core.setOutput("latest", latestVersion);
} catch (error) {
  core.setFailed(error.message);
}
