const { readFile } = require('fs').promises;
const path = require('path');

const talkersPath = path.resolve(__dirname, '..', 'talker.json');

const getAlltalkers = async () => {
  const response = await readFile(talkersPath, 'utf-8');
  // console.log(response);
  const talkers = JSON.parse(response);
  // console.log(talkers);
  return talkers;
};

module.exports = {
  getAlltalkers,
};