import { transformers } from "../config.json";
import http from "../../core/common/http";

const getAll = () => {
	return http.get(`${transformers.API_URL}/${transformers.tables.db}`);
};

export { getAll };
