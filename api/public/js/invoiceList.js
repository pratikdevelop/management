let categoriesData = []; // Define globally to avoid undefined errors

const loadData = async () => {
    try {
        const categories = await axios.get('/api/categories');
        categoriesData = categories.data.response;
        populateCategories(categoriesData);
    } catch (error) {
        console.error("Error loading categories:", error);
    }
};

const loadInvoices = async (page = 1, categoryId = null, search = '') => {
    try {
        const response = await axios.get(`/api/invoices?page=${page}&limit=10&search=${search}&category=${categoryId || ''}`);
        const { invoices, pagination } = response.data;

        const startItem = (pagination.currentPage - 1) * pagination.limit + 1;
        const endItem = Math.min(startItem + pagination.currentItems - 1, pagination.count);

        document.getElementById('start-item').textContent = startItem;
        document.getElementById('end-item').textContent = endItem;
        document.getElementById('total-items').textContent = pagination.count;

        // Pagination buttons
        const paginationContainer = document.getElementById('pagination_buttons');
        paginationContainer.innerHTML = `
            <button onclick="changePageNumber(${pagination.currentPage - 1})"
                class="rounded-md rounded-r-none border border-r-0 border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 disabled:pointer-events-none disabled:opacity-50"
                ${pagination.currentPage === 1 ? 'disabled' : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                </svg>
            </button>
        `;

        for (let i = 1; i <= pagination.totalPages; i++) {
            paginationContainer.innerHTML += `
                <button onclick="changePageNumber(${i})"
                    class="rounded-md rounded-r-none rounded-l-none border border-r-0 border-slate-300 py-2 px-3 text-center text-sm transition-all ${i === pagination.currentPage ? 'bg-slate-800 text-white' : 'text-slate-600 hover:text-white hover:bg-slate-800'}">
                    ${i}
                </button>
            `;
        }

        paginationContainer.innerHTML += `
            <button onclick="changePageNumber(${pagination.currentPage + 1})"
                class="rounded-md rounded-l-none border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 disabled:pointer-events-none disabled:opacity-50"
                ${pagination.currentPage === pagination.totalPages ? 'disabled' : ''}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </button>
        `;

        populateInvoices(invoices);
    } catch (error) {
        console.error("Error loading invoices:", error);
    }
};

const changePageNumber = (page) => {
    const search = document.getElementById('search-input').value;
    const categoryId = document.getElementById('category').value;
    loadInvoices(page, categoryId, search);
};

const populateCategories = (categories) => {
    const selectElement = document.getElementById('category');
    selectElement.innerHTML = '<option value="">All Categories</option>';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        selectElement.appendChild(option);
    });
};

const deleteInvoice = async (invoiceId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this invoice?");
    if (!isConfirmed) {
        return; // Exit the function if the user cancels
    }

    try {
        await axios.delete(`/api/invoices/${invoiceId}`);
        loadInvoices(); // Refresh with current filters
    } catch (error) {
        console.error('Error deleting invoice:', error);
    }
};

const markAsDone = async (invoiceId) => {
    try {
        await axios.put(`/api/invoices/${invoiceId}/status`); // Match controller route
        loadInvoices(); // Refresh with current filters
    } catch (error) {
        console.error('Error updating invoice status:', error);
    }
};

const changeCategory = (value) => {
    const search = document.getElementById('search-input').value;
    loadInvoices(1, value, search);
};

const populateInvoices = (invoices) => {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    invoices.forEach((invoice, index) => {
        tableBody.innerHTML += `
            <tr class="hover:bg-slate-50">
                <td class="p-2 border-gray-300 border">
                    <p class="text-sm font-bold">${invoice.id}</p> <!-- Use actual ID -->
                </td>
                <td class="p-2 border-gray-300 border">
                    <p class="text-sm font-bold">${invoice.invoice_number}</p>
                </td>
                <td class="p-2 border-gray-300 border">
                    <p class="text-sm">${invoice.Customer?.name || 'N/A'}</p>
                </td>
                <td class="p-2 border-gray-300 border">
                    <p class="text-sm">${invoice.Customer?.address || 'N/A'}</p>
                </td>
                <td class="p-2 border-gray-300 border">
                    <p class="text-sm">$${parseFloat(invoice.total_amount).toFixed(2)}</p>
                </td>
                <td class="p-2 border-gray-300 border">
                    <p class="text-sm text-center rounded-full text-white ${invoice.status === 'Pending' ? 'bg-orange-500 py-2' : 'bg-green-700 px-4 py-2'}">${invoice.status}</p>
                </td>
                <td class="p-2 border-gray-300 border">
                    <span class="flex items-center space-x-2">
                        ${invoice.status !== 'Complete' ? `
                            <i onclick="deleteInvoice(${invoice.id})" class="cursor-pointer text-sm fa-solid fa-trash text-red-700 px-2 py-2  rounded border-1"></i>
                            <i onclick="markAsDone(${invoice.id})" class="cursor-pointer text-sm fa-solid fa-circle-check text-green-800 px-2 py-2 rounded border-1"></i>
                        ` : '<span class="text-center w-6 h-1 border bg-black"></span>'}
                    </span>
                </td>
            </tr>
        `;
    });
};

// Search handler with debounce
document.getElementById('search-input').addEventListener('input', debounce(() => {
    const search = document.getElementById('search-input').value;
    const categoryId = document.getElementById('category').value;
    loadInvoices(1, categoryId, search);
}, 300));

function debounce(func, wait) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

window.addEventListener('load', () => {
    loadData();
    loadInvoices();
});