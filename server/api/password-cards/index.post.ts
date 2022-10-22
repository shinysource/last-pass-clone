import data from "~~/data/data.json";
import { IPassword } from "../../../interfaces/Password";

export default defineEventHandler(async (event) => {
  const body: IPassword = await readBody(event);
  data.push(body);

  return "success";
});
