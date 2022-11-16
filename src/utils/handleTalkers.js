const { readFile, writeFile } = require('fs').promises;
const path = require('path');

const talkersPath = path.resolve(__dirname, '..', 'talker.json');

const getAlltalkers = async () => {
  const response = await readFile(talkersPath, 'utf-8');
  // console.log(response);
  const talkers = JSON.parse(response);
  // console.log(talkers);
  return talkers;
};

const createTalker = async (name, age, talk) => {
  const talkers = await getAlltalkers();
  const id = Number(talkers[talkers.length - 1].id) + 1;
  const newTalker = {
    id,
    name,
    age,
    talk,
   };
  talkers.push(newTalker);
  await writeFile(talkersPath, JSON.stringify(talkers, null, 2));
  return newTalker;
};

const deleteTalker = async (id) => {
  const talkers = await getAlltalkers();
  const delTalker = talkers.filter((t) => +t.id !== +id);
  await writeFile(talkersPath, JSON.stringify(delTalker, null, 2));
};

module.exports = {
  getAlltalkers,
  createTalker,
  deleteTalker,
};