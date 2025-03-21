const express = require('express');
const router = express.Router();
const invoiceControllers = require('../controllers/invoiceController');

// Redirect root to /invoices
router.get('/', (req, res) => {
    res.redirect('/invoices');
});

// Render Pages
router.get('/invoices', invoiceControllers.getInvoiceListPage); // Invoice listing page
router.get('/invoices/new', invoiceControllers.getInvoiceForm); // Invoice form page

// API Endpoints
router.get('/api/invoices', invoiceControllers.getAllInvoices);
router.get('/api/invoices/:id', invoiceControllers.getInvoiceById);
router.post('/api/invoices', invoiceControllers.createInvoice);
router.delete('/api/invoices/:id', invoiceControllers.deleteInvoice);
router.put('/api/invoices/:id/status', invoiceControllers.invoiceStatusUpdate); // Updated to PUT to match controller

router.get('/api/customers', invoiceControllers.getCustomers);
router.get('/api/categories', invoiceControllers.getCategories);
router.get('/api/products', invoiceControllers.getProductsList);

module.exports = router;