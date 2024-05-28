import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles, deleteArticle } from '../Redux/actions/articleActions';
import { Link } from 'react-router-dom';
import { Button, TextField, Select, MenuItem, InputLabel, FormControl, Box } from '@mui/material';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteArticle(id));
    toast('🦄 Delete successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      type:"error"
      });

  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedArticles = filteredArticles.sort((a, b) => {
    if (sortOrder === 'asc') {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" m={5} >
        <Button component={Link} to="/create" variant="contained" color="primary">
          Add
        </Button>
        <TextField

          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ marginRight: '10px' }}
        />
        <FormControl variant="outlined">
          <InputLabel>Sort by Date</InputLabel>
          <Select value={sortOrder} onChange={handleSortChange} label="Sort by Date">
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">Category</StyledTableCell>
              <StyledTableCell align="center">Slug</StyledTableCell>
              <StyledTableCell align="center">Created At</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedArticles.map((article) => (
              <StyledTableRow key={article._id}>
                <StyledTableCell component="th" scope="row">
                  {article.title}
                </StyledTableCell>
                <StyledTableCell align="center">{article.description}</StyledTableCell>
                <StyledTableCell align="center">{article.category}</StyledTableCell>
                <StyledTableCell align="center">{article.slug}</StyledTableCell>
                <StyledTableCell align="center">{new Date(article.createdAt).toLocaleString()}</StyledTableCell>
                <StyledTableCell align="center">
                  <Link to={`/edit/${article._id}`}>
                    <EditIcon />
                  </Link>
                  <Link onClick={() => handleDelete(article._id)} color="secondary" style={{ marginLeft: '20px' }}>
                    <DeleteForeverIcon />
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ArticleList;
