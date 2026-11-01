const useCallback = __vite__cjsImport0_react["useCallback"]; const useEffect = __vite__cjsImport0_react["useEffect"]; const useState = __vite__cjsImport0_react["useState"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=25fa87c4";
import api from "/src/api/axios.js";
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
		return api.get(`/${endpoint}/`, { params: {
			page,
			search,
			page_size: pageSize
		} }).then((res) => {
			setItems(res.data.results);
			setCount(res.data.count);
		}).catch((err) => {
			// last item on the final page was deleted -> go back one page
			if (err.response?.status === 404 && page > 1) setPage(page - 1);
			else setError("Failed to load data. Is the backend running?");
		}).finally(() => setLoading(false));
	}, [
		endpoint,
		page,
		search,
		pageSize
	]);
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
		items,
		count,
		page,
		setPage,
		loading,
		error,
		onSearch,
		create,
		update,
		remove,
		reload: fetchItems
	};
}

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsU0FBUyxhQUFhLFdBQVcsZ0JBQWdCO0FBQ2pELE9BQU8sU0FBUztBQUVoQixlQUFlLFNBQVMsUUFBUSxVQUFVLFdBQVcsSUFBSTtDQUN2RCxNQUFNLENBQUMsT0FBTyxZQUFZLFNBQVMsQ0FBQyxDQUFDO0NBQ3JDLE1BQU0sQ0FBQyxPQUFPLFlBQVksU0FBUyxDQUFDO0NBQ3BDLE1BQU0sQ0FBQyxNQUFNLFdBQVcsU0FBUyxDQUFDO0NBQ2xDLE1BQU0sQ0FBQyxRQUFRLGFBQWEsU0FBUyxFQUFFO0NBQ3ZDLE1BQU0sQ0FBQyxTQUFTLGNBQWMsU0FBUyxJQUFJO0NBQzNDLE1BQU0sQ0FBQyxPQUFPLFlBQVksU0FBUyxFQUFFO0NBRXJDLE1BQU0sYUFBYSxrQkFBa0I7RUFDbkMsV0FBVyxJQUFJO0VBQ2YsU0FBUyxFQUFFO0VBQ1gsT0FBTyxJQUNKLElBQUksSUFBSSxTQUFTLElBQUksRUFBRSxRQUFRO0dBQUU7R0FBTTtHQUFRLFdBQVc7RUFBUyxFQUFFLENBQUMsQ0FBQyxDQUN2RSxNQUFNLFFBQVE7R0FDYixTQUFTLElBQUksS0FBSyxPQUFPO0dBQ3pCLFNBQVMsSUFBSSxLQUFLLEtBQUs7RUFDekIsQ0FBQyxDQUFDLENBQ0QsT0FBTyxRQUFROztHQUVkLElBQUksSUFBSSxVQUFVLFdBQVcsT0FBTyxPQUFPLEdBQUcsUUFBUSxPQUFPLENBQUM7UUFDekQsU0FBUyw4Q0FBOEM7RUFDOUQsQ0FBQyxDQUFDLENBQ0QsY0FBYyxXQUFXLEtBQUssQ0FBQztDQUNwQyxHQUFHO0VBQUM7RUFBVTtFQUFNO0VBQVE7Q0FBUSxDQUFDO0NBRXJDLGdCQUFnQjtFQUNkLFdBQVc7Q0FDYixHQUFHLENBQUMsVUFBVSxDQUFDO0NBRWYsTUFBTSxXQUFXLGFBQWEsVUFBVTtFQUN0QyxVQUFVLEtBQUs7RUFDZixRQUFRLENBQUM7Q0FDWCxHQUFHLENBQUMsQ0FBQztDQUVMLE1BQU0sVUFBVSxTQUFTLElBQUksS0FBSyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLFVBQVU7Q0FDeEUsTUFBTSxVQUFVLElBQUksU0FBUyxJQUFJLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssVUFBVTtDQUNqRixNQUFNLFVBQVUsT0FBTyxJQUFJLE9BQU8sSUFBSSxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLFVBQVU7Q0FFeEUsT0FBTztFQUNMO0VBQU87RUFBTztFQUFNO0VBQVM7RUFBUztFQUN0QztFQUFVO0VBQVE7RUFBUTtFQUFRLFFBQVE7Q0FDNUM7QUFDRiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJ1c2VDcnVkLmpzIl0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL2FwaS9heGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ3J1ZChlbmRwb2ludCwgcGFnZVNpemUgPSAxMCkge1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGZldGNoSXRlbXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0RXJyb3IoXCJcIik7XHJcbiAgICByZXR1cm4gYXBpXHJcbiAgICAgIC5nZXQoYC8ke2VuZHBvaW50fS9gLCB7IHBhcmFtczogeyBwYWdlLCBzZWFyY2gsIHBhZ2Vfc2l6ZTogcGFnZVNpemUgfSB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0SXRlbXMocmVzLmRhdGEucmVzdWx0cyk7XHJcbiAgICAgICAgc2V0Q291bnQocmVzLmRhdGEuY291bnQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIC8vIGxhc3QgaXRlbSBvbiB0aGUgZmluYWwgcGFnZSB3YXMgZGVsZXRlZCAtPiBnbyBiYWNrIG9uZSBwYWdlXHJcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZT8uc3RhdHVzID09PSA0MDQgJiYgcGFnZSA+IDEpIHNldFBhZ2UocGFnZSAtIDEpO1xyXG4gICAgICAgIGVsc2Ugc2V0RXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBkYXRhLiBJcyB0aGUgYmFja2VuZCBydW5uaW5nP1wiKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gIH0sIFtlbmRwb2ludCwgcGFnZSwgc2VhcmNoLCBwYWdlU2l6ZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hJdGVtcygpO1xyXG4gIH0sIFtmZXRjaEl0ZW1zXSk7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2godmFsdWUpO1xyXG4gICAgc2V0UGFnZSgxKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZSA9IChkYXRhKSA9PiBhcGkucG9zdChgLyR7ZW5kcG9pbnR9L2AsIGRhdGEpLnRoZW4oZmV0Y2hJdGVtcyk7XHJcbiAgY29uc3QgdXBkYXRlID0gKGlkLCBkYXRhKSA9PiBhcGkucHV0KGAvJHtlbmRwb2ludH0vJHtpZH0vYCwgZGF0YSkudGhlbihmZXRjaEl0ZW1zKTtcclxuICBjb25zdCByZW1vdmUgPSAoaWQpID0+IGFwaS5kZWxldGUoYC8ke2VuZHBvaW50fS8ke2lkfS9gKS50aGVuKGZldGNoSXRlbXMpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXRlbXMsIGNvdW50LCBwYWdlLCBzZXRQYWdlLCBsb2FkaW5nLCBlcnJvcixcclxuICAgIG9uU2VhcmNoLCBjcmVhdGUsIHVwZGF0ZSwgcmVtb3ZlLCByZWxvYWQ6IGZldGNoSXRlbXMsXHJcbiAgfTtcclxufSJdfQ==