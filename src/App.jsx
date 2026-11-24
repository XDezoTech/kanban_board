import { BoardProvider } from './context/BoardContext.jsx';
import BoardPage from './pages/BoardPage.jsx';

export default function App() {
  return (
    <BoardProvider>
      <BoardPage />
    </BoardProvider>
  );
}