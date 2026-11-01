import { useCallback, useEffect, useState } from "react";
import api from "../api/axios";

export default function useCrud(endpoint, pageSize = 10) {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchItems = useCallback(() => {
    setLoading(true);
    setError("");
    return api
      .get(`/${endpoint}/`, { params: { page, search, page_size: pageSize } })
      .then((res) => {
        setItems(res.data.results);
        setCount(res.data.count);
      })
      .catch((err) => {
        // last item on the final page was deleted -> go back one page
        if (err.response?.status === 404 && page > 1) setPage(page - 1);
        else setError("Failed to load data. Is the backend running?");
      })
      .finally(() => setLoading(false));
  }, [endpoint, page, search, pageSize]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const onSearch = useCallback((value) => {
    setSearch(value);
    setPage(1);
  }, []);

  const create = (data) => api.post(`/${endpoint}/`, data).then(fetchItems);
  const update = (id, data) => api.put(`/${endpoint}/${id}/`, data).then(fetchItems);
  const remove = (id) => api.delete(`/${endpoint}/${id}/`).then(fetchItems);

  return {
    items, count, page, setPage, loading, error,
    onSearch, create, update, remove, reload: fetchItems,
  };
}