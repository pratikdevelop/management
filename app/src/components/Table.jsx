import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from '@mui/material/Table';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import axios from 'axios'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const columns = [
  { id: "invoice_number", label: "Invoice Number", minWidth: 100 },
  { id: "Customer.name", label: "Customer Name", minWidth: 100 },
  { id: "Customer.address", label: "Customer Address", minWidth: 100 },
  { id: "total_amount", label: "Total Amount", minWidth: 100, align: "right", format: (value) => parseFloat(value).toLocaleString("en-US").concat('$') },
  { id: "status", label: "Invoice Status", minWidth: 30 },
  { id: "createdAt", label: "Created At", minWidth: 100, format: (value) => dayjs(value).format('YYYY-MM-DD HH:mm:ss') },
  { id: "updatedAt", label: "Updated At", minWidth: 100, format: (value) => dayjs(value).format('YYYY-MM-DD HH:mm:ss') },
  { id: "Action", label: "Action", minWidth: 100, }
];



export default function Datatable() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState(null);
  const [loading, setIsLoading] = useState(null);
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getInvoices();
    loadCategories();
    setIsLoading(false)

  }, [])


  const getInvoices = async () => {
    try {
      const response = await axios.get('http://localhost:4500/api/invoices?page=1&limit=10&search=&category=');
      setRows(response.data.invoices);
    }
    catch (error) {
      console.log(error);
    }
  }
  const loadCategories = async () => {
    try {
      const response = await axios.get('http://localhost:4500/api/categories');
      const categories = response.data.response;
      setCategories(categories);
      console.log(
        categories
      );
      

    } catch (error) {
      console.error(error);
    }

  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Paper sx={{

    }} className="flex flex-col space-y-6 h-[100vh] overflow-y-auto w-full p-4
    ">


      <header className="flex flex-col space-y-3">
        <Toolbar variant="dense" color="primary" style={{
          width: "100%",
          background:"blue"
        }}>
          <Typography variant="h5" className="text-white text-2xl" component="div">
            Invoice List
          </Typography>


          <Button color='white'  className="text-white ml-auto lowercase" style={{
            marginLeft: "auto",
            textTransform: "none",
            color:"white"

          }} >Add Invoice</Button>
        </Toolbar>
      <Stack sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px"
      }}>
        <TextField className="w-4/6" id="outlined-basic" label="Search by invoice number, customer name, address or amount" placeholder="Search by invoice number, customer name, address or amount" variant="outlined" />

        <FormControl className="w-2/6 h-13" >
          <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
          <Select fullWidth
            value={age}
            label="Select Category"
            onChange={handleChange}
          >
            {
              loading ? <MenuItem value={''}>select category</MenuItem> : categories?.map((category, index) => (
                <MenuItem key={index} value={category.id}>{category.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>


      </Stack>
      </header>

      {
        loading ? <>
          loading... </> : <>
          <TableContainer sx={{
            maxHeight: 440
          }} >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        row['Customer.name'] = row['Customer']['name']
                        row['Customer.address'] = row['Customer']['address']
                        const value = row[column.id];
                        return (
                          column.id !== 'Action' && column.id !== 'status' ?
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? '$'+ column.format(value)
                                : ['createdAt', 'updatedAt'].includes(column.id) ?
                                  dayjs(value).format('YYYY-MM-DD HH:mm:ss')
                                  : value}
                            </TableCell>
                            : column.id == 'status' ?
                              <TableCell key='status'>
                                <Typography variant='span' className={
                                  value === 'Pending' ? "bg-red-500 px-2 py-1 rounded-full text-xs text-white"
                                    : "bg-green-500 px-2 py-1 text-white rounded-full text-xs"
                                }>
                                  {value}
                                </Typography>
                              </TableCell>
                              :
                              <TableCell key='Action'>
                                {
                                  row['status'] === 'Pending' ?
                                    <><IconButton color='error' aria-label="delete">
                                      <DeleteIcon />
                                    </IconButton>
                                      <IconButton color='success' aria-label='completed'>
                                        <CheckCircleOutlineIcon />
                                      </IconButton>
                                    </> :
                                    <span>--</span>
                                }
                              </TableCell>

                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            sx={{
              height: "80px",
              overflow: "hidden"
            }}
            count={rows?.length}
            rowsPerPage={rowsPerPage}
            page={page}
          />
        </>
      }

    </Paper>
  );
}



