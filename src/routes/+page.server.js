import { SHEET_ID } from '$env/static/private'
import sheets from '@googleapis/sheets';

export async function load() {
    const auth = await new sheets.auth.GoogleAuth({
        keyFile: './auth.json',
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // fetch sheet
    const instance = sheets.sheets({version: 'v4', auth});
    const res = await instance.spreadsheets.values.get({spreadsheetId: SHEET_ID, range:'Sheet1'});
    const sheet = res.data.values;

    // get column names
    const columns = sheet[0];

    // get data without columns
    const body = sheet.slice(1, sheet.length - 1);

    // convert to array of objects
    const data = body.map((d) => {
        // pass column name to row
       const obj = d.map((k, idx) => ({ [columns[idx]]: k }));

       // flatten objects
       return Object.assign({}, ...obj)
    })
   
    return { projects: data} ;
  }
