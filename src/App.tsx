import { Header } from "./components/Header";
import { TodoApp } from "./components/TodoApp";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-12 w-full max-w-md mx-auto grid grid-cols-1 gap-y-8">
        <TodoApp />
      </main>
    </>
  );
};


export default App 
