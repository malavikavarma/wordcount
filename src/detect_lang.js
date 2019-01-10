import DB from './db';

const axios = require('axios');

const langQuery = language => new Promise((resolve, reject) => {
  DB.query(`SELECT * FROM languages where code='${language}'`, {
    type: DB.QueryTypes.SELECT,
  })
    .then(resultLang => resolve(resultLang))
    .catch(error => reject(error));
});

const langDetect = (req, res) => new Promise((resolve, reject) => {
  const dataLang = req.query.text;
  axios
    .get(
      `https://ws.detectlanguage.com/0.2/detect?key=14918d74095aa249c7feef3e30c244ae&q=${dataLang}`,
    )
    .then(({ data: { data } }) => {
      if (data.detections.length) {
        DB.query('insert into contenttable values (:dataLang)', {
          replacements: { dataLang },
          type: DB.QueryTypes.INSERT,
        });
        return resolve(data.detections[0].language);
      }
      return reject(Error("Couldn't detect"));
    })
    .catch(error => reject(res.status(400).send(error.message)));
});
const executeLangDetect = async (req, res) => {
  try {
    const responseDetect = await langDetect(req, res);
    const responseSelect = await langQuery(responseDetect);
    // console.log(responseSelect[0].language);
    return res.send(responseSelect[0].language);
  } catch (error) {
    return res.send('Couldnot Detect');
  }
};

export default executeLangDetect;
