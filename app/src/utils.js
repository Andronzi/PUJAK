/* eslint-disable */
import moby from "@mobyapps/moby.js";

/* eslint-disable */
async function getId(comp) {
  await moby.sqlite.run(
    "CREATE TABLE IF NOT EXISTS id_table (id TEXT UNIQUE)",
    "miniapp"
  );
  let storage_type = moby.sqlite.db_type.miniapp;
  let rv = await moby.sqlite.get("SELECT id FROM id_table", storage_type);
  comp.innerHTML = "\n213";
  return rv;
}

/* eslint-disable */
async function setId(id) {
  let storage_type = moby.sqlite.db_type.miniapp;

  await moby.sqlite.run(
    `INSERT INTO id_table (id) VALUES ("${id}")`,
    storage_type
  );

  let rv = await moby.sqlite.get("SELECT id FROM id_table", storage_type);
  return rv;
}

export { getId, setId };
