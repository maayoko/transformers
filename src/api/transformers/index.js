import { transformers } from "../config.json";
import http from "../../core/common/http";
// import { notFound } from "../../core/common/http/interceptors/response";

const getAll = () => {
	return http.get(`${transformers.API_URL}/${transformers.tables.db}`);
};

const createNewTransformer = transformer => {
	return http.post(`${transformers.API_URL}/${transformers.tables.transformers}`, transformer);
};

const updateCurrentTransformer = transformer => {
	// Server constantly respond with 404 so if we check for 404, our transformer will never get updated.
	// return notFound(
	// 	http.put(`${transformers.API_URL}/${transformers.tables.transformers}`, transformer)
	// );
	return http.put(`${transformers.API_URL}/${transformers.tables.transformers}`, transformer);
};

const deleteCurrentTransformer = id => {
	return http.delete(`${transformers.API_URL}/${transformers.tables.transformers}`, id);
};

export { getAll, createNewTransformer, updateCurrentTransformer, deleteCurrentTransformer };
