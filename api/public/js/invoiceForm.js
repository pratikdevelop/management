let customers = [];
let categories = [];
let products = [];
let totalAmount = 0;

// Fetch initial data
const loadData = async () => {
    try {
        const [customerResponse, categoryResponse] = await Promise.all([
            axios.get('/api/customers'),
            axios.get('/api/categories')
        ]);
        customers = customerResponse.data.response;
        categories = categoryResponse.data.response;

        if (customers.length === 0 || categories.length === 0) {
            throw new Error('No customers or categories available');
        }

        populateCustomers();
        populateCategories();
    } catch (error) {
        console.error("Error loading data:", error);
        alert("Failed to load customers or categories. Please try again later.");
    }
};

// Populate customers
const populateCustomers = () => {
    const customerSelect = document.getElementById("customer");
    customerSelect.innerHTML = '<option value="">Select Customer</option>';
    customers.forEach(customer => {
        const option = document.createElement("option");
        option.value = customer.id;
        option.textContent = customer.name;
        customerSelect.appendChild(option);
    });
};

// Populate categories in all selects
const populateCategories = () => {
    const selectElements = document.querySelectorAll(".category");
    selectElements.forEach(selectElement => {
        if (!selectElement.value) {
            selectElement.innerHTML = '<option value="">Select Category</option>';
            categories.forEach(category => {
                const option = document.createElement("option");
                option.value = category.id;
                option.textContent = category.name;
                selectElement.appendChild(option);
            });
        }
    });
};

// Fetch products based on category
const loadProducts = async (categoryId, productSelect) => {
    try {
        if (!categoryId) {
            productSelect.innerHTML = '<option value="">Select Product</option>';
            return;
        }
        const response = await axios.get(`/api/products?category_id=${categoryId}`);
        products = response.data.response;

        if (products.length === 0) {
            productSelect.innerHTML = '<option value="">No Products Available</option>';
            return;
        }

        productSelect.innerHTML = '<option value="">Select Product</option>';
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = `${product.name} - $${product.price}`;
            option.dataset.price = product.price;
            productSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        productSelect.innerHTML = '<option value="">Error Loading Products</option>';
    }
};

// Add invoice row
const addInvoiceRow = (callAddmore=false) => {
    const tbody = document.querySelector("tbody");
    if (!tbody) {
        console.error("Table body not found");
        return;
    }

    const newRow = document.createElement("tr");
    newRow.classList.add("hover:bg-slate-50");
    newRow.innerHTML = `
        <td class="p-4 w-48">
            <select class="category w-full bg-transparent text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2" onchange="loadProducts(this.value, this.closest('tr').querySelector('.product'))">
                <option value="">Select Category</option>
            </select>
        </td>
        <td class="p-4 w-48">
            <select class="product w-full bg-transparent text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2" onchange="updateRowTotal(this)">
                <option value="">Select Product</option>
            </select>
        </td>
        <td class="p-4">
            <input type="number" min="1" max="1000" class="quantity w-full text-sm border border-slate-200 rounded-md px-3 py-2" value="1" onchange="updateRowTotal(this)" />
        </td>
        <td class="p-4">
            <input class="price w-full text-sm border border-slate-200 rounded-md px-3 py-2" value="0.00" readonly />
        </td>
        <td class="p-4">
            <input class="total w-full text-sm border border-slate-200 rounded-md px-3 py-2" value="0.00" readonly />
        </td>
        <td class="p-4">
            ${
                callAddmore ? '<button type="button" class="text-sm bg-red-600 px-3 py-1 rounded-full text-white" onclick="deleteRow(this)"><i class="fa-solid fa-xmark"></i></button>': ''
            }
            
        </td>
    `;
    tbody.appendChild(newRow);
    populateCategories();
    updateInvoiceTotal();
};

// Delete row
const deleteRow = (button) => {
    const rowCount = document.querySelectorAll("tbody tr").length;
    if (rowCount <= 1) {
        alert("Cannot delete the last row. At least one item is required.");
        return;
    }
    button.closest("tr").remove();
    updateInvoiceTotal();
};

// Update row total
const updateRowTotal = (element) => {
    const row = element.closest("tr");
    const productSelect = row.querySelector(".product");
    const quantityInput = row.querySelector(".quantity");
    const priceInput = row.querySelector(".price");
    const totalInput = row.querySelector(".total");

    const selectedOption = productSelect.selectedOptions[0];
    const price = selectedOption && selectedOption.dataset.price ? parseFloat(selectedOption.dataset.price) : 0;
    let quantity = parseInt(quantityInput.value) || 0;

    // Quantity validation
    if (quantity < 1) {
        quantity = 1;
        quantityInput.value = 1;
        alert("Quantity must be at least 1.");
    } else if (quantity > 1000) {
        quantity = 1000;
        quantityInput.value = 1000;
        alert("Quantity cannot exceed 1000.");
    }

    priceInput.value = price.toFixed(2);
    const total = (price * quantity).toFixed(2);
    totalInput.value = total;

    updateInvoiceTotal();
};

// Update customer details
const customerChange = (customerId) => {
    if (!customerId) {
        document.getElementById('customer-details').innerHTML = '';
        return;
    }

    const customer = customers.find(c => c.id == customerId); // Loose comparison for string IDs
    if (!customer) {
        alert("Invalid customer selected.");
        document.getElementById('customer').value = '';
        document.getElementById('customer-details').innerHTML = '';
        return;
    }

    document.getElementById('customer-details').innerHTML = `
        <input class="w-full text-sm border border-slate-200 rounded-md px-3 py-2" value="${customer.address}" readonly />
        <input class="w-full text-sm border border-slate-200 rounded-md px-3 py-2" value="${customer.phone}" readonly />
        <input class="w-full text-sm border border-slate-200 rounded-md px-3 py-2" value="${customer.city}" readonly />
        <input class="w-full text-sm border border-slate-200 rounded-md px-3 py-2" value="${customer.state}" readonly />
    `;
};

// Update invoice total
const updateInvoiceTotal = () => {
    const totals = document.querySelectorAll(".total");
    let invoiceTotal = 0;
    totals.forEach(total => {
        invoiceTotal += parseFloat(total.value) || 0;
    });
    document.getElementById("invoiceTotal").innerHTML = `$${invoiceTotal.toFixed(2)}`;
    totalAmount = invoiceTotal; // Keep as number for submission
};

// Handle form submission
const handleSubmit = (event) => {
    event.preventDefault();
    const customerId = document.getElementById("customer").value;
    if (!customerId) {
        alert("Please select a customer.");
        return;
    }

    const invoiceData = {
        customer_id: parseInt(customerId), // Ensure integer
        total_amount: parseFloat(totalAmount), // Ensure float
        items: []
    };

    const rows = document.querySelectorAll("tbody tr");
    let hasValidItems = true;

    rows.forEach(row => {
        const productSelect = row.querySelector(".product");
        const quantityInput = row.querySelector(".quantity");
        const priceInput = row.querySelector(".price");
        const totalInput = row.querySelector(".total");

        if (productSelect.value && quantityInput.value && priceInput.value && totalInput.value) {
            const quantity = parseInt(quantityInput.value);
            const price = parseFloat(priceInput.value);
            const total = parseFloat(totalInput.value);

            if (quantity <= 0 && price <= 0 && total <= 0) {
                hasValidItems = false;
                return;
            }

                invoiceData.items.push({
                    product_id: parseInt(productSelect.value),
                    quantity: quantity,
                    price: price,
                    total: total
                });
        } else {
            hasValidItems = false;
        }
    });

    if (!hasValidItems) {
        alert("Please add  valid invoice item with a product, quantity, and total.");
        return;
    }

    if (invoiceData.total_amount <= 0) {
        alert("Total amount must be greater than zero.");
        return;
    }

    axios.post('/api/invoices', invoiceData)
        .then(response => {
            alert("Invoice submitted successfully!");
            document.querySelector("tbody").innerHTML = "";
            addInvoiceRow();
            document.getElementById("customer").value = "";
            document.getElementById("invoiceTotal").innerHTML = '$0.00';
            document.getElementById('customer-details').innerHTML = '';
            window.location.href = '/'
        })
        .catch(error => {
            console.error("Error submitting invoice:", error);
            alert("Error submitting invoice: " + (error.response?.data?.message || error.message));
        });
};

window.addEventListener("load", () => {
    loadData();
    addInvoiceRow(); // Start with one row
});