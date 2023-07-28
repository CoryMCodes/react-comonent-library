import Button from "./Button";
import { GoBell } from "react-icons/go";

function App() {
  return (
    <div>
      <h1>Buttons</h1>
      <div className="flex flex-row gap-12 justify-center">
        <div>
          <Button primary>
            Click Me! <GoBell />
          </Button>
          <Button secondary>Buy Now</Button>
          <Button success>Search</Button>
          <Button warning>Return</Button>
          <Button danger>Sign Up</Button>
        </div>
        <div>
          <Button primary rounded>
            Click Me! <GoBell />
          </Button>

          <Button secondary rounded>
            Buy Now
          </Button>

          <Button success rounded>
            Search
          </Button>

          <Button warning rounded>
            Return
          </Button>

          <Button danger rounded>
            Sign Up
          </Button>
        </div>
        <div>
          <Button primary outline rounded>
            Click Me! <GoBell />
          </Button>

          <Button secondary outline rounded>
            Buy Now
          </Button>

          <Button success outline rounded>
            Search
          </Button>

          <Button warning outline rounded>
            Return
          </Button>

          <Button danger outline rounded>
            Sign Up
          </Button>
        </div>
        <div>
          <Button primary outline>
            Click Me! <GoBell />
          </Button>

          <Button secondary outline>
            Buy Now
          </Button>

          <Button success outline>
            Search
          </Button>

          <Button warning outline>
            Return
          </Button>

          <Button danger outline>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
