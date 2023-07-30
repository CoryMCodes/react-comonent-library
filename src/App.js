import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "123jn",
      label: "Label Is This One",
      content: "This is all the content",
    },
    {
      id: "12723453jn",
      label: "Label Is This One",
      content: "This is all the content",
    },
    {
      id: "12asdf3jn",
      label: "Label Is This One",
      content: "This is all the content",
    },
  ];
  return (
    <div>
      <ButtonPage />
      <Accordion items={items} />
    </div>
  );
}

export default App;
