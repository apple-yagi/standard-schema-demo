import "./App.css";
import { standardValidate } from "./lib/standard-validate";
import * as string from "./schema/string";

function App() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")!.toString();

    const zodResult = await standardValidate(string.zod, name);
    console.log(zodResult);

    const valibotResult = await standardValidate(string.valibot, name);
    console.log(valibotResult);

    const arktypeResult = await standardValidate(string.arktype, name);
    console.log(arktypeResult);
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="name" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
