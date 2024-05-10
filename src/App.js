import './App.css';
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import { Container, Paper, Box, Typography } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Paper elevation={3}>
          <Box bgcolor="primary.main">
            <Typography variant="h4" style={{ color: 'white', textAlign: 'center' }}>Todo List</Typography>
          </Box>
          <TodoAdd />
          <TodoList />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
