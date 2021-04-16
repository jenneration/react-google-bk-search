import axios from "axios";


export default {
    getbooks: (query) => axios.get("https://www.googleapis.com/books/v1/volumes", { query }),
    savebook: (book) => axios.post("/api/book", book),
    getallbooks: () => axios.get("/api/books"),
    deletebook: (id) => axios.delete("/api/book/" + id)
};