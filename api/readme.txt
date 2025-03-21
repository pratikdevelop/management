### `README.txt`
```
# Invoice Management Application

This is a web application for managing invoices, built with Node.js, Express, Sequelize (MySQL), EJS for templating, and Tailwind CSS for styling. It allows users to view, create, and manage invoices with customer and product details, featuring pagination, filtering, and validation.

## Features
- **Invoice Listing**: View all invoices with pagination, search, and category filtering.
- **Invoice Creation**: Add new invoices with customer selection, dynamic product rows, and total calculation.
- **Dynamic Data**: Fetches customers, categories, and products via API calls using Axios.
- **Validation**: Ensures valid customer selection, product quantities, and totals before submission.
- **Responsive UI**: Styled with Tailwind CSS and custom fonts (Bree Serif).

## Tech Stack
- **Backend**: Node.js, Express, Sequelize (MySQL)
- **Frontend**: EJS, Tailwind CSS, Font Awesome, Axios
- **Database**: MySQL

## Prerequisites
- **Node.js**: v16 or higher
- **MySQL**: v8 or higher
- **npm**: Installed with Node.js

## Setup Instructions

1. **go inside the project**:
   ```
   cd invoice-management-application
   ```

2. **Install Dependencies**:
   ```
   npm install
   ```
   Key dependencies:
   - express
   - sequelize
   - mysql2
   - ejs

3. **Configure Database**:
   - Edit `config/config.json` with your MySQL credentials:
     ```json
     {
       "development": {
         "username": "your_username",
         "password": "your_password",
         "database": "InvoiceTrackerAPP",
         "host": "127.0.0.1",
         "dialect": "mysql"
       }
     }
     ```
   - Create the database:
     ```
     mysql -u your_username -p
     CREATE DATABASE InvoiceTrackerAPP;
     EXIT;
     ```

4. **Run Migrations**:
   ```
   npx sequelize db:migrate
   ```

5. **Seed Initial Data** (if applicable):
   ```
   npx sequelize db:seed:all
   ```
   - Seeds 20 invoices, customers, categories, products, and invoice items.

6. **Start the Server**:
   ```
   PS E:\next-node\backend> node app.js
   ```
   - Server runs on `http://localhost:4500`.

## Routes

### Page Routes
- **GET /**: Redirects to `/invoices`
- **GET /invoices**: Renders the invoice list page (`invoiceList.ejs`)
- **GET /invoices/new**: Renders the invoice form page (`invoiceForm.ejs`)

### API Endpoints
- **GET /api/invoices**: Fetch all invoices with pagination and filters (`page`, `limit`, `search`, `category`)
- **GET /api/invoices/:id**: Fetch a single invoice by ID
- **POST /api/invoices**: Create a new invoice
- **DELETE /api/invoices/:id**: Delete an invoice
- **PUT /api/invoices/:id/status**: Update invoice status to "Complete"
- **GET /api/customers**: Fetch all customers
- **GET /api/categories**: Fetch all categories
- **GET /api/products**: Fetch products by category ID (`category_id`)

## Usage

1. **View Invoices**:
   - Visit `http://localhost:4500/invoices`
   - Use the search bar to filter by invoice number, customer name, address, or amount (e.g., `619` searches within ±0.5 range).
   - Filter by category using the dropdown.
   - Paginate using the buttons.
   - Mark invoices as "Complete" or delete them (if not complete).

2. **Create an Invoice**:
   - Visit `http://localhost:4500/invoices/new`
   - Select a customer to populate details.
   - Add rows to select categories, products, and quantities.
   - Total updates dynamically.
   - Submit to save the invoice (validates customer and items).

## Key Files

### `app.js`
- Configures Express, EJS, static files (`/static`), and Sequelize connection.
- Starts the server on port 4500.

### `invoiceControllers.js`
- Handles all logic for rendering pages and API endpoints.
- Includes validation and error handling.

### `invoiceList.js`
- Fetches and displays invoices dynamically via Axios.
- Handles search, category filtering, pagination, deletion, and status updates.

### `invoiceForm.js`
- Fetches customers, categories, and products.
- Manages dynamic invoice rows with validation (e.g., quantity 1-1000, customer required).
- Submits the invoice via POST request.

### `invoiceList.ejs` & `invoiceForm.ejs`
- EJS templates styled with Tailwind CSS and Font Awesome.
- Use client-side JS for dynamic content.

## Database Schema
- **Invoices**: `id`, `invoice_number`, `customer_id`, `total_amount`, `status` (Pending/Complete)
- **Customers**: `id`, `name`, `phone`, `address`, `city`, `state`
- **Categories**: `id`, `name`
- **Products**: `id`, `name`, `price`, `stock`, `sku`, `category_id`
- **InvoiceItems**: `id`, `invoice_id`, `product_id`, `quantity`, `price`, `total`