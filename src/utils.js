/* eslint-disable */
import moby from "@mobyapps/moby.js";
import { v4 } from "uuid";

/* eslint-disable */
async function getId() {
  let storage_type = moby.sqlite.db_type.miniapp;
  let rv = await moby.sqlite.get("SELECT id FROM id_table", storage_type);
  return rv;
}

/* eslint-disable */
async function setId() {
  await moby.sqlite.run(
    "CREATE TABLE IF NOT EXISTS id_table (id TEXT UNIQUE)",
    "miniapp"
  );

  let storage_type = moby.sqlite.db_type.miniapp;

  await moby.sqlite.run(
    `INSERT INTO id_table (id) VALUES ("${v4()}")`,
    storage_type
  );

  let rv = await moby.sqlite.get("SELECT id FROM id_table", storage_type);
  return rv;
}

export { getId, setId };
