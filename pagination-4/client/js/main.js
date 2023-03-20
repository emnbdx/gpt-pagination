$(document).ready(() => {
    fetchData(1);
  });
  
  function fetchData(page) {
    const itemsPerPage = 3;
    $.getJSON(`http://127.0.0.1:3000/api/items?page=${page}&itemsPerPage=${itemsPerPage}`, (data) => {
      renderData(data.items);
      renderPagination(data.totalItems, itemsPerPage, page);
    });
  }
  
  function renderData(items) {
    const itemsTable = $("#items-table");
    itemsTable.empty();
    items.forEach((item) => {
      itemsTable.append(`<tr><td>${item.id}</td><td>${item.label}</td><td>${item.quantity}</td></tr>`);
    });
  }
  
  function renderPagination(totalItems, itemsPerPage, currentPage) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pagination = $(".pagination");
    pagination.empty();
  
    for (let i = 1; i <= totalPages; i++) {
      const listItem = $(`<li class="page-item${i === currentPage ? " active" : ""}"><a class="page-link" href="#">${i}</a></li>`);
      listItem.click((e) => {
        e.preventDefault();
        fetchData(i);
      });
      pagination.append(listItem);
    }
  }
  