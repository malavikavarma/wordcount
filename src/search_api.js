import DB from './db';

const searchAPI = (req, res) => {
  const searchKey = req.query.key.toLowerCase();
  DB.query(`SELECT * FROM contenttable where lower(values) like '%${searchKey}%' `, {
    type: DB.QueryTypes.SELECT,
  })
    .then((selectWord) => {
      const data = selectWord
        .map((result) => {
          const count = result.values.split(searchKey).length - 1;
          return {
            text: result.values,
            occurance: count,
          };
        })
        .sort((x, y) => y.occurance - x.occurance)
        .map(finalResult => finalResult.text);
      return res.json(data);
    })
    .catch(error => error);
};

export default searchAPI;
