import Search from './search';

export default function Page({
                               searchParams,
                             }) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (<div>
    <Search></Search>
    {query && <div>Search query: {query}</div>}
    {currentPage && <div>Current page: {currentPage}</div>}
  </div>)
}
