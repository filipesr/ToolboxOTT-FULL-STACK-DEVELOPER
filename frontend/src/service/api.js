export async function GetList(setListFiles) {
  const res = await fetch(`http://localhost:3000/files/list`);
  const data = await res.json();
  const { files } = data;
  setListFiles(files);
}

export async function GetData(file, setFileData) {
  const res = await fetch(`http://localhost:3000/files/data?fileName=${file}`);
  const data = await res.json();
  setFileData(data);
}
