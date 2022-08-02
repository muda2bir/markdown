import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    setMarkdown(`# This is H1 Heading
## This is H2 Heading
### This is H3 Heading
---  
Visit [freeCodeCamp](https://freecodecamp.org/)  

**This is Bold Text**
---  
*This is Italic Text*  
This how we can write code in the Editor

\`\`\`
function addNumber(a , b) {
return a + b;
};  
console.log(addNumber(1, 2));
\`\`\`  
\`console.log('Inline Code Snippet');\`

> This is a Blockquote  
![A Bird](https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=169&q=80)  
1. First Item
2. Second Item
3. Third Item
`);
  }, []);

  return (
    <>
      <div className="bg-indigo-500 w-screen h-screen">
        <h1 className="text-3xl font-bold text-center py-6 text-yellow-300">
          My Markdown Previewer
        </h1>
        <div className="main_container h-4/5 w-11/12 mx-auto flex gap-2">
          <Editor setMarkdown={setMarkdown} markdown={markdown} />
          <Previewer markdown={markdown} />
        </div>
      </div>
    </>
  );
}

export default App;
