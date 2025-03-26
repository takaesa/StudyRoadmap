import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { HomePage } from './components/Home.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RQSuperHeroPage } from './components/RQSuperHero.Page';
import { ParallelQueriesPage } from './components/ParallelQueries.page';
import { DynamicParallelPage } from './components/DynamicParallel.page';
import { DependentQueriesPage } from './components/DependentQueries.page';
import { PaginatedQueriesPage } from './components/PaginatedQueries.page';
import { InfiniteQueriesPage } from './components/InfiniteQueries.page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/rq-infinite' element={<InfiniteQueriesPage />}></Route>
            <Route path='/rq-paginated' element={<PaginatedQueriesPage />}></Route>
            <Route path='/rq-dependent' element={<DependentQueriesPage email="vishwas@example.com" />}></Route>
            <Route path="/rq-dynamic-parallel" element={<DynamicParallelPage heroID={[1, 3]} />}></Route>
            <Route path="/rq-parallel" element={<ParallelQueriesPage />}></Route>
            <Route path="/rq-super-heros/:heroId" element={<RQSuperHeroPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          </Routes>
        </div>
      </Router >
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider >

  );
}

export default App;
