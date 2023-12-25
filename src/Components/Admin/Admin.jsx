import React, { useEffect, useState } from 'react'
import { createClient } from "@sanity/client";
import * as XLSX from 'xlsx';
import "./admin.css";

const client = createClient({
    projectId: "tbe7nf8h",
    dataset: "production",
    useCdn: false,
    apiVersion: "v2022-03-07",
    token: "skmVqPLTjbFiIvm5mHJOmVjOZPWt2UQ7G3ijS2qQHrYLZ0SH66WWa887r1lS8RRCRiGkB15MpHm8wHu0Bmyw8Gk7sLJGVHVIwzjSOOBqy56H5C2Id1w1yYwLPx7ovRexNIJrkk6P7Ge8cJzRkXBRDIuYjCaDFGr15wcb1cBEpSRvm3XzGqth"

})

function Admin() {
    const initialCateg = {
        "dettol": [],
        "lizol": [],
        "harpic": [],
        "mosquito": [],
        "haircare": [],
        "oralcare": [],
        "fabriccare": [],
        "fooditems": [],

    }

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
                console.log(workbook);
                const sheetName = workbook.SheetNames[0];
                //console.log(sheetName);
                const sheet = workbook.Sheets[sheetName];

                for (let o of workbook.Strings) {
                    const text = o?.t?.split(" ")[0]?.toLowerCase();
                    if (text === "" || text === "sprinkles") continue
                    switch (text) {
                        case "dettol":
                        case "godrej":
                        case "boroplus":
                        case "vasocare":
                        case "aer":
                            initialCateg.dettol.push({
                                _key:o?.t,
                                title:o?.t,
                                price:30
                            });
                            break
                        case "lizol":
                        case "colin":
                        case "odonil":
                            initialCateg.lizol.push({
                                _key:o?.t,
                                title:o?.t,
                                price:30
                            });
                            break

                        case "harpic":
                            initialCateg.harpic.push({
                                _key:o?.t,
                                title:o?.t,
                                price:30
                            });
                            break

                        case "hit":
                            initialCateg.mosquito.push({
                                _key:o?.t,
                                title:o?.t,
                                price:30
                            });
                            break

                        case "ezee":
                            initialCateg.fabriccare.push({
                                _key:o?.t,
                                title:o?.t,
                                price:20
                            });
                            break

                        case "shanti":
                        case "parachute":
                        case "kesh":
                        case "zandu":
                        case "fair&":
                            initialCateg.haircare.push({
                                _key:o?.t,
                                title:o?.t,
                                price:10
                            });
                            break

                        case "dant":
                            initialCateg.oralcare.push({
                                _key:o?.t,
                                title:o?.t,
                                price:20
                            });
                            break

                        default:
                            initialCateg.fooditems.push({
                                _key:o?.t,
                                title:o?.t,
                                price:20
                            });

                    }

                }
                
                const query = "*[_type=='productdoc']";
                client.fetch(query)
                    .then(docs => {
                        console.log(docs);
                        const updatePromises = docs.map(doc => {

                            const docId = doc?._id;
                            const existingCats = doc?.category || [];
                            const filteredProds = initialCateg[doc?.title].filter((val)=>{
                                return existingCats.some(existingValue => (
                                    existingValue.title === val.title && val.price === val.price
                                ));
                            });
                            console.log(existingCats);
                            console.log(filteredProds);
                            const updates = {
                                set: {
                                    ["category"]: [
                                       
                                        ...filteredProds
                                    ]
                                }
                            }
                            return client.patch(docId).set(updates.set).commit();
                        });

                        return Promise.all(updatePromises);
                    }).then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.log(err);
                    });

                    setJsonObject(initialCateg);

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
                <div className='Uploaded-fileName'>{file ? file.name : "No File Available"}</div>
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