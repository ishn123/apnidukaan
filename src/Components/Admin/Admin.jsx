import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx';
import "./Admin.css"
function Admin(){
  const [jsonObject, setJsonObject] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleConvertClick = () => {
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = parseExcelData(data);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const jsonData = parseSheetData(sheet);
        setJsonObject(jsonData);
        console.log(jsonData);
      };

      reader.readAsBinaryString(file);
    }
  };

  const parseExcelData = (data) => {
    const binary = data;
    const workbook = XLSX.read(binary, { type: 'binary' });
    return workbook;
  };
  const parseSheetData = (sheet) => {
    const jsonData = [];
    const range = XLSX.utils.decode_range(sheet['!ref']);
    const headers = [];
    for (let col = range.s.c; col <= range.e.c; col++) {
      const cellAddress = { r: range.s.r, c: col };
      const cellRef = XLSX.utils.encode_cell(cellAddress);
      const header = sheet[cellRef] ? sheet[cellRef].v : null;
      headers.push(header);
    }
    for (let row = range.s.r + 1; row <= range.e.r; row++) {
      const rowData = {};
      for (let col = range.s.c; col <= range.e.c; col++) {
        const cellAddress = { r: row, c: col };
        const cellRef = XLSX.utils.encode_cell(cellAddress);
        const cellValue = sheet[cellRef] ? sheet[cellRef].v : null;
        const header = headers[col - range.s.c];
        rowData[header] = cellValue;
      }
      jsonData.push(rowData);
    }

    return jsonData;
  };

  return (
    <div className='Excel-to-Json'>
      <h1>Excel to JSON Converter</h1>
      <div class="upload-btn-wrapper">
  <button class="btn">Upload a file</button>
  <input type="file" accept=".xlsx, .xls, .csv" onChange={handleFileChange} />
  <div className='Uploaded-fileName'>{file?file.name:"No File Available"}</div>
</div>

      <button onClick={handleConvertClick} className='Convert-button' disabled={!file}>
        Convert to JSON
      </button>

      {jsonObject && (
        <div className='Json-object-wrapper'>
          <h2>Converted JSON Object:</h2>
          <pre>{JSON.stringify(jsonObject, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
export default Admin