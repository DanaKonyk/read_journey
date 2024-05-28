export const options = [
  { value: 'all', label: 'All Books' },
  { value: 'unread', label: 'Unread' },
  { value: 'progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
];

export const visibleBook = (status, newBook) => {
  if (status === 'done') {
    return newBook.filter(item => item.status === 'done');
  } else if (status === 'progress') {
    return newBook.filter(item => item.status === 'progress');
  } else if (status === 'unread') {
    return newBook.filter(item => item.status === 'unread');
  }
  return newBook;
};
